import React from "react";

function Logout() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="text-center text-4xl">Logoutしました</div>
      <a className="text-center text-3xl mt-52" href="/">
        Login画面へ
      </a>
    </div>
  );
}

export default Logout;
