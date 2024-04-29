import axios from "axios";

import authHeader from "./headers";

//ユーザー情報取得用
async function getNowUser() {
  const response = await axios.get(
    process.env.REACT_APP_AXIOS_ADDRESS + "api/auth/users/me/",
    {
      headers: authHeader(),
    }
  );
  console.log(response);
  return response.data;
}

//chatGPT関連のデータ取得用
async function getChatGPT() {
  const response = await axios.get(
    process.env.REACT_APP_AXIOS_ADDRESS + "get_chatgpt/",
    {
      headers: authHeader(),
    }
  );
  console.log(response);
  return response.data;
}

const userService = {
  getNowUser,
  getChatGPT,
};

export default userService;
