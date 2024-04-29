import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "./headers";

//PostはReduxを使用
const sinupPost = createAsyncThunk(
  "user/SignupUser",
  async (payload: {
    email: string;
    username: string;
    pass: string;
    repass: string;
  }) => {
    // 非同期の処理を実行
    const response = await axios.post(
      process.env.REACT_APP_AXIOS_ADDRESS + "api/auth/users/",
      {
        email: payload.email,
        username: payload.username,
        password: payload.pass,
        re_password: payload.repass,
      }
    );
    // 処理が成功した場合、response.dataを返す
    return response.data;
  }
);

const patchNewUser = createAsyncThunk(
  "user/UpdateUser",
  async (NowUser: any) => {
    const request = await axios.patch(
      process.env.REACT_APP_AXIOS_ADDRESS + "api/auth/users/me/",
      {
        username: NowUser["NowUserName"],
        email: NowUser["NowUserEmail"],
      },
      { headers: authHeader() }
    );
    console.log(request);
    console.log(request.data);
  }
);

const DeleteUser = createAsyncThunk("user/UserDelete", async (NowUser: any) => {
  const request = await axios.delete(
    process.env.REACT_APP_AXIOS_ADDRESS + "api/auth/users/me/",
    {
      data: {
        current_password: NowUser["NowUserPass"],
      },
      headers: authHeader(),
    }
  );
  console.log(request);
  console.log(request.data);
});

async function sendGO(
  ProName: string,
  title: string,
  SVG: string,
  Mermaid: string,
  newQuestion: string
) {
  const request = await axios.post(
    process.env.REACT_APP_AXIOS_ADDRESS + "send_chatgpt/",
    {
      loginuser: ProName,
      author: ProName,
      Title: title,
      svg: SVG,
      Mermaid: Mermaid,
      text: newQuestion,
    },
    { headers: authHeader() }
  );
  console.log(request);
  console.log(request.data);
}

const PostuserService = {
  sinupPost,
  patchNewUser,
  DeleteUser,
  sendGO,
};

export default PostuserService;
