import { Button } from "@mui/material";
import React, { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

function UserUpdateSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectId, setSelectId] = useState(location.state);

  function toLogin() {
    navigate("/");
  }

  return (
    <div>
      <div>
        <div>
          <p>ユーザー情報を更新しました</p>
        </div>

        <div>
          <div> userneme:{selectId.nowUserName}</div>

          <div> email:{selectId.nowUserEmail}</div>
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

export default UserUpdateSuccess;
