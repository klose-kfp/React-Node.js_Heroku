import { Button } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function ActivationMail() {
  const navigate = useNavigate();
  const { uid, token } = useParams();

  // uidとtokenを利用した処理をここに追加
  async function Activation() {
    const request: AxiosResponse<any, any> = await axios.post(
      process.env.REACT_APP_AXIOS_ADDRESS + "/api/auth/users/activation/",
      {
        uid: uid,
        token: token,
      }
    );
    navigate("/");
  }

  return (
    <div>
      <h2>以下をクリックして、本登録を完了してください</h2>
      <Button variant="contained" className="mt-2" onClick={Activation}>
        こちらをクリック！！
      </Button>
    </div>
  );
}

export default ActivationMail;
