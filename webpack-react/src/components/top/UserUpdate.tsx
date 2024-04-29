import React, { useState, useEffect } from "react";

import "./UserUpdate.css";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import type { AppDispatch } from "@src/store/index";
import { Button, Stack } from "@mui/material";

import type { UserUpdateState } from "@src/types/types";
import PostuserService from "@src/api/post_axios";
import InputUserName from "@src/form/InputUserName";
import InputMailAddress from "@src/form/InputMailAddress";

function UserUpdate() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectId, setSelectId] = useState(location.state);

  const [state, setState] = useState<UserUpdateState>({
    email: "",
    username: "",
    showPassword: false,
    errorMessage: "",
    error: false,
  });

  useEffect(() => {
    setState({
      ...state,
      email: selectId.email,
      username: selectId.username,
      showPassword: false,
    });
  }, []);

  const UpdateUser = async () => {
    let NowUser = {
      NowUserName: state.username,
      NowUserEmail: state.email,
    };
    const result = await dispatch(await PostuserService.patchNewUser(NowUser));
    console.log(result);
    if (result.type === "user/UpdateUser/fulfilled") {
      navigate("/userupdate/success", {
        state: { nowUserName: state.username, nowUserEmail: state.email },
      });
    } else if (result.type === "user/UpdateUser/rejected") {
      setState({ ...state, errorMessage: "ユーザー情報の更新に失敗しました" });
    }
  };

  function onErrorChange(hasError: boolean) {
    setState({
      ...state,
      error: hasError,
    });
  }

  function Back() {
    navigate("/main");
  }

  function ToDelete() {
    navigate("/userdelete", {
      state: { username: selectId.username, email: selectId.email },
    });
  }

  return (
    <div className="userupdate-page h-full text-center items-center flex flex-column">
      <div className="userupdate-main inline-block mt-32 text-center items-center flex flex-column">
        <div>
          <p>ユーザー情報の変更</p>
        </div>

        <div className="items-center flex flex-column">
          <Stack>
            <InputUserName
              value={state.username}
              onChange={(newValue) =>
                setState({ ...state, username: newValue })
              }
            />

            <InputMailAddress
              value={state.email}
              onChange={(newValue) => setState({ ...state, email: newValue })}
              onErrorChange={onErrorChange}
            />
          </Stack>
          <Button
            variant="contained"
            onClick={UpdateUser}
            disabled={state.error || !state.username || !state.email}
          >
            ユーザー情報変更
          </Button>
          {state.errorMessage != "" && (
            <div className="bg-red-500 text-white m-2 p-3 w-1/2" role="alert">
              {state.errorMessage}
            </div>
          )}
        </div>
      </div>
      <div className="button-zone">
        <div>
          <Button variant="contained" onClick={Back}>
            戻る
          </Button>
        </div>
        <div>
          <Button variant="contained" onClick={ToDelete}>
            ユーザー削除ページへ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserUpdate;
