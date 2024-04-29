import React, { useState } from "react";
import "./UserDelete.css";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { AppDispatch } from "@src/store/index";
import { Button, Stack } from "@mui/material";

import type { UserDeleteState } from "@src/types/types";
import PostuserService from "@src/api/post_axios";
import InputPassword from "@src/form/InputPassword";

function UserDelete() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectId, setSelectId] = useState(location.state);

  const [state, setState] = useState<UserDeleteState>({
    pass: "",
    showPassword: false,
    error: "",
  });

  const DeleteUser = async () => {
    let NowUser = {
      NowUserPass: state.pass,
    };
    const result = await dispatch(PostuserService.DeleteUser(NowUser));
    console.log(result);
    if (result.type === "user/UserDelete/fulfilled") {
      navigate("/userdelete/success", {
        state: {
          nowUserEmail: selectId.email,
          nowUserName: selectId.username,
        },
      });
    } else if (result.type === "user/UserDelete/rejected") {
      setState({ ...state, error: "パスワードが間違っています" });
    }
  };

  function Back() {
    navigate("/userupdate", {
      state: { username: selectId.username, email: selectId.email },
    });
  }
  function pressEnter(e: any) {
    if (e.key == "Enter") {
      DeleteUser();
    }
  }

  return (
    <div className="delete-page h-full text-center">
      <Stack>
        <div>
          <p>以下のユーザーを削除しますか？</p>
        </div>

        <div>
          <p>email:{selectId.email}</p>
        </div>
        <div>
          <p>userneme:{selectId.username}</p>
        </div>

        <InputPassword
          value={state.pass}
          showPass={state.showPassword}
          onChange={(newValue) => setState({ ...state, pass: newValue })}
          onKeyDown={(e: React.ChangeEvent<HTMLInputElement>) => pressEnter(e)}
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
        <div className="items-center flex flex-column">
          <Button
            variant="contained"
            onClick={DeleteUser}
            disabled={!state.pass}
          >
            ユーザー削除
          </Button>
          {state.error && (
            <div className="bg-red-500 text-white m-2 p-3 w-1/4" role="alert">
              {state.error}
            </div>
          )}
        </div>
        <div>
          <Button variant="contained" onClick={Back}>
            戻る
          </Button>
        </div>
      </Stack>
    </div>
  );
}

export default UserDelete;
