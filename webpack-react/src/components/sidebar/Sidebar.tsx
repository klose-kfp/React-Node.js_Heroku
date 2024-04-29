import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppDispatch } from "@src/store";
import { useDispatch } from "react-redux";
import { userLogout } from "@src/store/users";
import { MainContext, MainContextType } from "../top/Context";
import { Tooltip, Typography } from "@mui/material";
import { useContext } from "react";

function Sidebar() {
  const context: MainContextType = useContext(MainContext);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const box1: any = document.getElementById("hover1");
  if (box1) {
    box1.addEventListener("mouseover", function () {
      box1.classList.add("active");
    });
    box1.addEventListener("mouseleave", function () {
      box1.classList.remove("active");
    });
  }
  const box2: any = document.getElementById("hover2");
  if (box2) {
    box2.addEventListener("mouseover", function () {
      box2.classList.add("active");
    });
    box2.addEventListener("mouseleave", function () {
      box2.classList.remove("active");
    });
  }

  function UserUpdate() {
    navigate("/userupdate", {
      state: { username: context.user.username, email: context.user.email },
    });
  }

  const Logout = async () => {
    const result = await dispatch(await userLogout());
    if (result.type === "user/Logout/fulfilled") {
      navigate("/logout");
    }
  };

  return (
    <div className="d-flex h-full flex-column flex-shrink-0 p-3 text-bg-dark !text-center">
      <div className="text-bg-dark flex justify-center">
        <img src="https://placehold.jp/eb34ef/ffffff/100x100.png" />
      </div>
      <Tooltip
        title={
          <Typography
            margin="0"
            fontSize="30px"
            width="100%"
            textAlign="center"
          >
            ようこそ！！ (yokoso!!)
          </Typography>
        }
        sx={{ margin: "0" }}
        placement="right"
      >
        <div
          className={
            context.type.isMobile ? "nav-link mt-2 mb-2" : "nav-link user-name"
          }
        >
          {context.user.username} さん
        </div>
      </Tooltip>

      <ul
        className={
          context.type.isMobile
            ? "flex justify-around nav nav-pills mb-auto overflow-scroll hidden-scrollbar"
            : "sidebar-button nav nav-pills mb-auto overflow-scroll hidden-scrollbar"
        }
      >
        <button
          className={
            context.type.displayType == "form"
              ? "nav-link active side-button"
              : "nav-link side-button"
          }
          aria-current="page"
          onClick={() => context.onClickSidebarButton("form")}
        >
          ☆NEW!!
        </button>
        <Tooltip
          title={
            <Typography
              margin="0"
              fontSize="20px"
              width="100%"
              textAlign="center"
            >
              保存した画像はこちら！
            </Typography>
          }
          sx={{ margin: "0" }}
          placement="right"
        >
          <button
            className={
              context.type.displayType == "past"
                ? "nav-link active side-button"
                : "nav-link side-button"
            }
            aria-current="page"
            onClick={() => context.onClickSidebarButton("past")}
          >
            保存履歴
          </button>
        </Tooltip>
        <button
          id="hover1"
          className={
            context.type.isMobile
              ? "nav-link mini-font mt-2"
              : "nav-link mini-font info-change-button"
          }
          aria-current="page"
          value="登録情報変更"
          onClick={UserUpdate}
        >
          登録情報
          <br />
          変更
        </button>

        <button
          id="hover2"
          className="nav-link mini-font logout-button"
          aria-current="page"
          value="ログアウト"
          onClick={Logout}
        >
          ログアウト
        </button>
      </ul>
    </div>
  );
}

export default Sidebar;
