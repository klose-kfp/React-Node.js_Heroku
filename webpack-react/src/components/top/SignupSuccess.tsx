import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SignupSuccess() {
  // データ受け取り用
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
          <p>以下の内容で仮登録を行いました。</p>
          <p>登録にアドレスに送信された本登録用メールより</p>
          <p>本登録を行なってください</p>
          <p>※本登録後ログイン可能となります</p>
        </div>

        <div>
          <div>email{selectId.UserEmail}</div>

          <div>username:{selectId.UserName}</div>

          <div>password:xxxxxxx</div>
        </div>

        <div>
          <input type="button" value="ログイン画面へ" onClick={toLogin} />
        </div>
      </div>
    </div>
  );
}

export default SignupSuccess;
