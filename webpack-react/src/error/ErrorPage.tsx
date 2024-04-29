import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  function toLogin() {
    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center items-center h-full pb-24">
      <h1 className="text-3xl">ErrorPage</h1>
      <div className="mt-32 hover:text-orange-500">
        <a type="button" onClick={toLogin}>
          ログイン画面へ
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
