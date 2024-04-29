import React, { useState } from "react";
import "./Login.css";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import type { AppDispatch } from "@src/store/index";
import { useSelector } from "@src/store/index";
import { loginUser } from "@src/store/users";
import { Button } from "@mui/material";
import type { UserState } from "@src/types/types";
import InputMailAddress from "@src/form/InputMailAddress";
import InputPassword from "@src/form/InputPassword";
import LoginTypingAnimation from "@src/function/LoginTypingAnimation";
import Svg from "@src/images/Svg";

function Login() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState<UserState>({
    email: "",
    pass: "",
    showPassword: false,
    error: false,
  });

  const { loading, errorMessage } = useSelector((state) => state.user);

  const userLogin = async () => {
    const userCredentials = {
      userEmail: state.email,
      userPass: state.pass,
    };
    const result = await dispatch(loginUser(userCredentials));
    if (result.payload) {
      setState({
        ...state,
        email: "",
        pass: "",
      });
      navigate("/main");
    }
  };
  function onErrorChange(hasError: boolean) {
    setState({
      ...state,
      error: hasError,
    });
  }

  function toSignup() {
    navigate("/signup");
  }

  function pressEnter(e: any) {
    if (e.key == "Enter") {
      userLogin();
    }
  }

  return (
    <div className="h-full sm:block md:flex">
      <div className="login-page w-full md:!w-3/12">
        <div className="login-main text-center md:!text-left">
          <p className="text-center md:pl-2 pt-4 md:!pt-16 md:!pb-8 text-2xl">
            F.IT 〜First IT〜
          </p>

          <div className="login-text w-full  flex justify-center pt-2 md:!pt-4 pb-2 md:!pb-4 pl-1 md:pl-0">
            <p className="md:bg-black md:text-white md:!text-left rounded md:w-full  md:border-4 md:border-white md:pt-0 md:pl-2 md:pb-8">
              「テキストか゛　す゛にかわる。
              <br />
              ふしき゛な せかいへ ようこそ．． 　｛
            </p>
          </div>

          <div className="md:text-center md:pt-4">
            <InputMailAddress
              value={state.email}
              onChange={(newValue) => setState({ ...state, email: newValue })}
              onErrorChange={onErrorChange}
            />

            <InputPassword
              value={state.pass}
              showPass={state.showPassword}
              onChange={(newValue) => setState({ ...state, pass: newValue })}
              onKeyDown={(e: any) => pressEnter(e)}
            />

            <FormControlLabel
              label="パスワードを表示"
              control={
                <Checkbox
                  checked={state.showPassword}
                  onChange={(e) =>
                    setState({ ...state, showPassword: e.target.checked })
                  }
                  value="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                  sx={{ fontSize: "small" }}
                />
              }
            />
          </div>

          <div className="text-center md:!text-left flex flex-row justify-center items-center md:!flex-col md:items-center mt-1 md:!mt-0">
            <Button
              variant="contained"
              className="md:w-5/12 md:!text-left !mr-2 md:!mr-0 !mt-1 md:mb-1"
              onClick={userLogin}
              disabled={state.error || !state.email}
            >
              {loading ? "Loading..." : "Login"}
            </Button>

            {errorMessage && (
              <div className="bg-red-500 text-white p-4" role="alert">
                {errorMessage}
              </div>
            )}
            <a className="cursor-pointer hover:text-red-500" onClick={toSignup}>
              新規登録画面へ
            </a>
          </div>
        </div>
      </div>
      <LoginTypingAnimation />
      <div className="w-full md:!w-5/12 flex-row flex md:flex-col justify-center pt-2 md:pt-0">
        <Svg />
      </div>
    </div>
  );
}

export default Login;
