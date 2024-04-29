import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/top/Login";
import Logout from "./components/top/Logout";
import Signup from "./components/top/Signup";
import SignupSuccess from "./components/top/SignupSuccess";
import UserDelete from "./components/top/UserDelete";
import UserDeleteSuccess from "./components/top/UserDeleteSuccess";
import UserUpdate from "./components/top/UserUpdate";
import UserUpdateSuccess from "./components/top/UserUpdateSuccess";
import ErrorPage from "./error/ErrorPage";
import FormSlide from "./components/contents/maincontent/formslide/FormSlide";
import PostContents from "./components/contents/maincontent/postcontents/PostContents";
import ActivationMail from "./mail/ActivationMail";
import Context from "./components/top/Context";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    let vw = window.innerWidth;

    const handleResize = () => {
      if (vw === window.innerWidth) {
        return;
      }

      vw = window.innerWidth;
      setFillHeight();
    };

    window.addEventListener("resize", handleResize);

    // 初期化
    setFillHeight();

    // コンポーネントがアンマウントされるときにイベントリスナーを削除する
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]); // 空の配列は、この useEffect が初回のみ実行されることを示します
  return (
    <div className="app h-screen w-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/main"
          element={<Context displayType="form" slide={<FormSlide />} />}
        />
        <Route
          path="/history"
          element={<Context displayType="past" slide={<PostContents />} />}
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/success" element={<SignupSuccess />} />
        <Route path="/activate/:uid/:token" element={<ActivationMail />} />
        <Route path="/userupdate" element={<UserUpdate />} />
        <Route path="/userupdate/success" element={<UserUpdateSuccess />} />
        <Route path="/userdelete" element={<UserDelete />} />
        <Route path="/userdelete/success" element={<UserDeleteSuccess />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
