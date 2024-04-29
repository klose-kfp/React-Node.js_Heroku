#!/usr/bin/env node
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import pg from "pg";
const { Pool } = pg;

//------開発環境用---------
import dotenv from "dotenv";
dotenv.config();
//-----------------------

const app = express();
const PORT = process.env.PORT || 8000;

const allowedOrigins = [
  "http://localhost:3000",
  "https://f-it-first.com",
  "https://f-it-first-78ba656984a5.herokuapp.com",
];

const __filename = fileURLToPath(import.meta.url); // __filename equivalent
const __dirname = dirname(__filename);

const SECRETKEY = process.env.SECRETKEY;
const EXPIRESIN = process.env.EXPIRESIN;

const OPTIONS = {
  algorithm: "HS256",
  expiresIn: EXPIRESIN,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./../webpack-react/build")));
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
//-------開発時(PostgreSQL)------------------
// PostgreSQL接続情報
const connectionOptions = {
  user: "postgres",
  host: "localhost",
  database: "Heroku",
  password: "37253725kf",
  port: 5432,
};
// postgres://postgres:37253725kf@localhost:5432/Heroku

// PostgreSQLクライアントの生成;
const pool = new Pool(connectionOptions);
//------------------------------

//-----本番環境(Heroku)時---------
// const pool = new Pool({

// PostgreSQL(Heroku Postgres)用
// connectionString: process.env.DATABASE_URL,

//MySQL(ClearDB)用
//   connectionString: process.env.CLEARDB_DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
//------------------------------

//----------------ユーザー情報取得--------------------------
app.get("/api/auth/users/me", async (req, res) => {
  // リクエストヘッダーやクエリパラメータからトークンを取得
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Not authorized" });
  }

  // トークン検証
  const decoded = await jwt.verify(token, SECRETKEY);
  if (!decoded) {
    return res.status(401).json({ error: "Invalid token" });
  }
  const userInfo = {
    email: decoded.email,
    username: decoded.username,
  };
  res.json(userInfo);
});

//-----------------------------------------------------
//----------------GPTs(chatGPT関連のデータが入ったDB)情報取得--------------------------
app.get("/get_chatgpt", async (req, res) => {
  //データ取得(全て取得し、フロント側でデータを抜粋する形式)
  const queryGPTs = 'SELECT * FROM "GPTs"';

  const data = await pool.query(queryGPTs).catch((err) => {
    console.error("Query execution error:", err.message);
    return res.status(500).send("Query execution error");
  });

  res.json(data.rows);
});

//----------------Signup--------------------------
app.post("/api/auth/users", async (req, res) => {
  const { email, username, password } = req.body;

  //DBに格納する前にパスワードをハッシュ化する
  const hashedPassword = await bcrypt.hash(password, 10).catch((hashErr) => {
    console.error("Hashing error:", hashErr.message);
    return res.status(500).send("Hashing error");
  });

  //DBに格納する
  const insertQuery =
    'INSERT INTO "User" (email, username, password) VALUES ($1, $2, $3)';

  await pool
    .query(insertQuery, [email, username, hashedPassword])
    .catch((queryErr) => {
      console.error("Failed to create account:", queryErr.message);
      return res.status(500).send("Signup error");
    });
  //サインアップ処理終了後に、登録したemail,usernameをレスポンスする
  const responseBody = { email, username };
  res.status(200).json(responseBody);
});

//----------------アカウント情報の更新--------------------------
app.patch("/api/auth/users/me", authenticateToken, async (req, res) => {
  const { username, email } = req.body;
  const userId = req.user.id;
  //idを元にデータを更新していく
  const updateQuery =
    'UPDATE "User" SET username = $1, email = $2 WHERE id = $3';

  await pool
    .query(updateQuery, [username, email, userId])
    .catch((updateErr) => {
      console.error("Failed to update user information:", updateErr.message);
      return res.status(500).send("Failed to update user information");
    });

  res.status(200).send("User information has been successfully updated");
  console.log("User information has been successfully updated");
});

//----------------アカウント情報の削除--------------------------
app.delete("/api/auth/users/me", authenticateToken, async (req, res) => {
  const userId = req.user.id;
  const deleteQuery = 'DELETE FROM "User" WHERE id = $1';

  //idを元にデータを更新していく
  await pool.query(deleteQuery, [userId]).catch((deleteErr) => {
    console.error("Failed to delete user:", deleteErr.message);
    return res.status(500).send("Failed to delete user");
  });

  res.status(200).send("User has been successfully deleted");
  console.log("User has been successfully deleted");
});

//----------------JWT認証ミドルウェア(アカウント情報の更新・削除に使用)--------------------------
async function authenticateToken(req, res, next) {
  //ヘッダーからトークンを取得
  const token = await req.headers.authorization.catch((err) => {
    return res.status(401).send("Token not provided " + err.message);
  });
  //トークンをデコードしユーザー情報を取得する
  const user = await jwt.verify(token, process.env.SECRETKEY).catch((err) => {
    return res.status(403).send("Token verification failed " + err.message);
  });

  req.user = user;
  //リクエスト処理を次の段階に進める
  next();
}

//----------------ログイン処理--------------------------

app.post("/api/auth/jwt/create", async (req, res) => {
  const { email, password } = req.body;

  const results = await pool
    .query('SELECT * FROM "User" WHERE email = $1', [email])
    .catch((dbError) => {
      console.error("Database Query Error:", dbError.message);
      return res.status(500).send("Database Query Error");
    });

  if (!results || results.rows.length === 0) {
    console.log("Mail address does not exist");
    return res.status(401).send("Invalid email or password");
    //攻撃者に対して余分な情報を提供しない為、このエラーメッセージを使用するそうです
    //本来は、メールアドレスがDBに存在しない、などのエラー
  }

  const user = results.rows[0];

  const match = await bcrypt
    .compare(password, user.password)
    .catch((bcryptError) => {
      console.error("bcrypt.compare Error:", bcryptError.message);
      return res.status(500).send("bcrypt.compare Error");
    });

  if (!match) {
    return res.status(401).send("Invalid username or password");
  }

  const payload = {
    id: user.id,
    email: user.email,
    username: user.username,
  };
  const token = jwt.sign(payload, SECRETKEY, OPTIONS);
  const responseBody = { email: email, access: token };
  res.status(200).json(responseBody);
  console.log("ログイン成功！！レッツハック！！");
});

//----------------GPTs(chatGPT関連のデータ)をDBへ送信--------------------------
app.post("/send_chatgpt", async (req, res) => {
  const { loginuser, author, Title, text, Mermaid, svg } = req.body;

  const insertQuery =
    'INSERT INTO "GPTs" (loginuser, author, "Title", text, "Mermaid", svg) VALUES ($1, $2, $3, $4, $5, $6)';
  //データをDBへ格納
  await pool
    .query(insertQuery, [loginuser, author, Title, text, Mermaid, svg])
    .catch((queryErr) => {
      console.error("Failed to create data:", queryErr.message);
      return res.status(500).send("Failed to create data");
    });

  //成功通知を出す
  console.log("Data creation completed!");
  res.status(200).json(req.body);
});

//上記以外のアドレスからの通信をフロント側(React)の画面を返す
app.get("*", (res) => {
  res.sendFile(path.join(__dirname, "./../webpack-react/build/index.html"));
});
//Expressサーバを指定されたポートで起動する
app.listen(PORT, () => console.log("Server is running"));

//エラーハンドリング
app.use((err, res) => {
  console.error(err.stack);

  // クライアントにエラーレスポンスを返す
  res.status(500).send("Something went wrong!");
});

// もし 404 エラーが発生した場合
app.use((res) => {
  res.status(404).send("Not Found");
});
