import React, { useEffect } from "react";
import Contents from "@src/components/contents/Contents";
import { useNavigate } from "react-router-dom";
import { BoxType } from "@src/types/types";
import SlideMenu from "../sidebar/SlideMenu";
import userService from "@src/api/get_axios";
import { ErrorHandle } from "@src/error/ErrorHandle";

type MainProps = {
  setUserGPTs: (user: UserInfo, GPTs: GPT[]) => void;
};

type GPT = {
  loginUser: string;
  Title: string;
  Mermaid: string;
  svg: string;
  text: string;
  UpdatedDate: string;
};
type UserInfo = {
  username: string;
  email: string;
};

function Main({ setUserGPTs }: MainProps) {
  const navigate = useNavigate();

  useEffect(() => {
    async function getAction() {
      const resUser: void | UserInfo = await getUserAction().catch((err) => {
        ErrorHandle(err, "User:");
        navigate("/error");
      });
      if (resUser) {
        const resGPTs: void | GPT[] | "" = await getGPT(resUser.username).catch(
          (err) => {
            ErrorHandle(err, "GPT:");
            navigate("/error");
          }
        );
        if (resGPTs) {
          setUserGPTs(resUser, resGPTs);
        }
      }
    }
    getAction();
  }, []);

  async function getUserAction() {
    const response: UserInfo = await userService.getNowUser();
    console.log("getNowUser", response);
    return response;
  }

  async function getGPT(Name: string) {
    if (!Name) return "";
    const response: [] = await userService.getChatGPT();

    let filtered: GPT[] = await response.filter((box: BoxType) => {
      return box.loginuser == Name;
    });
    //ログインしているユーザーが、画像未作成時の処理
    if (filtered.length == 0) {
      filtered = await response.filter((box: BoxType) => {
        return box.loginuser == "";
      });
      console.log(filtered);
    }
    return filtered;
  }
  // ----------------------------ここまでGET動作

  return (
    <div className="block md:flex h-full w-full">
      <SlideMenu />
      <Contents />
    </div>
  );
}

export default Main;
