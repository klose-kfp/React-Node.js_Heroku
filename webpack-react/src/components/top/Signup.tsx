import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, FormControlLabel, Stack } from "@mui/material";

import type { SignupState } from "@src/types/types";
import { AppDispatch } from "@src/store";
import { useDispatch } from "react-redux";
import PostuserService from "@src/api/post_axios";
import InputMailAddress from "@src/form/InputMailAddress";
import InputUserName from "@src/form/InputUserName";
import InputPassword from "@src/form/InputPassword";

function Signup() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const [state, setState] = useState<SignupState>({
    email: "",
    username: "",
    pass: "",
    repass: "",
    showPassword: false,
    errorMessage: "",
    error: false,
  });

  async function signupUser() {
    const result: any = await dispatch(
      await PostuserService.sinupPost({
        email: state.email,
        username: state.username,
        pass: state.pass,
        repass: state.repass,
      })
    );
    if (result.type === "user/SignupUser/fulfilled") {
      navigate("/signup/success", {
        state: {
          UserEmail: state.email,
          UserName: state.username,
        },
      });
    } else if (result.type === "user/SignupUser/rejected") {
      setState({ ...state, errorMessage: "ユーザー作成に失敗しました" });
    }
    console.log(result);
  }
  function onErrorChange(hasError: boolean) {
    setState({
      ...state,
      error: hasError,
    });
  }

  function toLogin() {
    navigate("/");
  }
  function pressEnter(e: React.KeyboardEvent) {
    if (e.key == "Enter") {
      signupUser();
    }
  }

  return (
    <div>
      <Stack>
        <div>
          <p>メールアドレス・ユーザーネーム・パスワードを登録してください</p>
        </div>

        <InputMailAddress
          value={state.email}
          onChange={(newValue) => setState({ ...state, email: newValue })}
          onErrorChange={onErrorChange}
        />

        <InputUserName
          value={state.username}
          onChange={(newValue) => setState({ ...state, username: newValue })}
        />

        <InputPassword
          value={state.pass}
          showPass={state.showPassword}
          onChange={(newValue) => setState({ ...state, pass: newValue })}
          onKeyDown={(e: React.KeyboardEvent) => pressEnter(e)}
        />
        <InputPassword
          value={state.repass}
          showPass={state.showPassword}
          onChange={(newValue) => setState({ ...state, repass: newValue })}
          onKeyDown={(e: React.KeyboardEvent) => pressEnter(e)}
        />

        <FormControlLabel
          label="パスワードを表示"
          control={
            <Checkbox
              checked={state.showPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setState({ ...state, showPassword: e.target.checked })
              }
              value="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          }
        />
        <div>
          <Button
            variant="contained"
            onClick={signupUser}
            disabled={
              state.error ||
              !state.email ||
              !state.username ||
              !state.pass ||
              !state.repass
            }
          >
            登録
          </Button>
          {state.errorMessage != "" && (
            <div className="bg-red-500 text-white m-2 p-3 w-1/2" role="alert">
              {state.errorMessage}
            </div>
          )}
        </div>
        <div>
          <input type="button" value="ログイン画面へ" onClick={toLogin} />
        </div>
      </Stack>
    </div>
  );
}

export default Signup;
