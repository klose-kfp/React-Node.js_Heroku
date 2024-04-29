import React, { useState } from "react";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";

function UserDeleteSuccess() {
  const location = useLocation();
  const [selectId, setSelectId] = useState(location.state);

  const navigate = useNavigate();

  function toLogin() {
    createAsyncThunk("user/Logoutsuccess", async () => {
      await localStorage.removeItem("user");
    });
    navigate("/");
  }

  return (
    <div>
      <div>
        <div>
          <p>以下のユーザーを削除しました</p>
        </div>

        <div>
          <div> email:{selectId.nowUserEmail}</div>

          <div> username:{selectId.nowUserName}</div>
        </div>

        <div>
          <Button variant="contained" className="mt-2" onClick={toLogin}>
            ログイン画面へ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserDeleteSuccess;
