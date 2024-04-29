import React, { createContext, useEffect, useState } from "react";
import Main from "./Main";
import { useNavigate } from "react-router-dom";
import { Slide, SlideProps } from "@mui/material";
import html2pdf from "html2pdf.js";
import { sendGPT } from "@src/api/chatGPT";
import PostuserService from "@src/api/post_axios";
import useMediaQuery from "@mui/material/useMediaQuery";

type ContextProps = {
  slide: React.ReactNode;
  displayType: "form" | "past";
};

export type GPT = {
  loginUser: string;
  Title: string;
  Mermaid: string;
  svg: string;
  text: string;
  UpdatedDate: string;
};
type FromGPT = {
  MermaidText: string;
  text: string;
  SVG: string;
};

type UserInfo = {
  username: string;
  email: string;
};
type DisplayType = "form" | "past";
type LastPushBottunState = "初期" | "図の種類" | "説明" | "Go";

type TypeContext = {
  selectType: string;
  doraqueType: string;
  displayType: DisplayType;
  lastPush: LastPushBottunState;
  hoverType: string;
  open: boolean;
  loading: boolean;
  isMobile: boolean;
};

export type MainContextType = {
  user: UserInfo;
  onClickSidebarButton: (type: DisplayType) => void;
  selectTypeChange: (type: string, doraqueType: string) => void;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  SlideTransition: React.FC<SlideProps>;
  SVGProps: (svg: string) => void;
  pushGo: (question: string) => void;
  pushSave: (title: string) => void;
  pushBack: (type: LastPushBottunState) => void;
  hoverTypeAdd: (type: string) => void;
  pushImageType: (type: LastPushBottunState) => void;
  handleLoadingChange: (newValue: boolean) => void;
  formAdd: (newValue: string) => void;
  onChangeForm: (newValue: string, key: "textForm" | "titleForm") => void;
  svgSaveToState: (svg: SVGSVGElement | null | undefined) => void;
  svgDownload: () => void;
  svgDLSavePage: () => void;
  localSaveClick: () => void;
  type: TypeContext;
  GPTs: GPT[];
  FromGPT: FromGPT;
  slide: React.ReactNode;
  textForm: string;
  titleForm: string;
};
type TypeState = {
  selectType: string;
  doraqueType: string;
  lastPush: LastPushBottunState;
  hoverType: string;
  open: boolean;
  loading: boolean;
  isMobile: boolean;
};

type MainState = {
  user: UserInfo;
  GPTs: GPT[];
  FromGPT: FromGPT;
  type: TypeState;
  textForm: string;
  titleForm: string;
  responseSvg: SVGSVGElement | null | undefined;
};

export const MainContext = createContext<MainContextType>({
  user: {
    username: "",
    email: "",
  },
  onClickSidebarButton: (type: DisplayType) => {},
  selectTypeChange: (type: string) => {},
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => {},
  SlideTransition: (props) => <Slide {...props} direction="down" />,
  SVGProps: (svg: string) => {},
  pushGo: (question: string) => {},
  pushSave: (title: string) => {},
  pushBack: (type: LastPushBottunState) => {},
  hoverTypeAdd: (type: string) => {},
  pushImageType: (type: LastPushBottunState) => {},
  handleLoadingChange: (newValue: boolean) => {},
  formAdd: (newValue: string) => {},
  onChangeForm: (newValue: string) => {},
  svgSaveToState: (svg: SVGSVGElement | null | undefined) => {},
  svgDownload: () => {},
  svgDLSavePage: () => {},
  localSaveClick: () => {},
  type: {
    displayType: "form",
    doraqueType: "",
    selectType: "",
    lastPush: "初期",
    hoverType: "",
    open: false,
    loading: false,
    isMobile: false,
  },
  GPTs: [],
  FromGPT: {
    MermaidText: "",
    text: "",
    SVG: "",
  },
  slide: "",
  textForm: "",
  titleForm: "",
});

function Context({ slide, displayType }: ContextProps) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [state, setState] = useState<MainState>({
    user: {
      username: "",
      email: "",
    },
    type: {
      selectType: "",
      doraqueType: "",
      lastPush: "初期",
      hoverType: "",
      open: false,
      loading: false,
      isMobile: false,
    },
    GPTs: [],
    FromGPT: {
      MermaidText: "",
      text: "",
      SVG: "",
    },
    textForm: "",
    titleForm: "",
    responseSvg: null,
  });
  // -----------------現在の画面サイズを更新する------
  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      type: {
        ...prevState.type,
        isMobile: isMobile,
      },
    }));
  }, [isMobile]);

  // ---------------------------------------------

  // -----------------MainからGETした情報を受け取る------
  function setUserGPTs(user: UserInfo, GPTs: GPT[]) {
    setState((prevState) => ({
      ...prevState,
      user: user,
      GPTs: GPTs,
    }));
  }

  // -------------------ここから、クリック処理------------

  async function pushGo(question: string) {
    console.log("バケツリレー成功");
    const Mermaid: string = await sendGPT(
      state.type.selectType,
      question
    ).catch((error) => {
      console.log("通信に失敗しました" + error);
    });
    if (Mermaid)
      setState((prevState) => ({
        ...prevState,
        FromGPT: {
          ...prevState.FromGPT,
          MermaidText: Mermaid,
          text: question,
        },
        type: {
          ...prevState.type,
          lastPush: "Go",
          loading: false,
        },
      }));
  }

  async function pushSave(title: string) {
    await PostuserService.sendGO(
      state.user.username,
      title,
      state.FromGPT.SVG,
      state.FromGPT.MermaidText,
      state.FromGPT.text
    ).catch((error) => {
      console.log("通信に失敗しました" + error);
    });
    setState((prevState) => ({
      ...prevState,
      type: {
        ...prevState.type,
        open: true,
      },
    }));
  }

  function pushBack(type: LastPushBottunState) {
    setState((prevState) => ({
      ...prevState,
      type: {
        ...prevState.type,
        lastPush: type,
      },
      titleForm: "",
    }));
  }

  function SVGProps(svg: string) {
    setState((prevState) => ({
      ...prevState,
      FromGPT: {
        ...prevState.FromGPT,
        SVG: svg,
      },
    }));
  }
  const handleClose = () => {
    setState((prevState) => ({
      ...prevState,
      type: {
        ...prevState.type,
        open: false,
      },
    }));
  };
  function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="down" />;
  }

  function onClickSidebarButton(type: DisplayType) {
    if (type == "past") {
      navigate("/history");
    } else if (type == "form") {
      navigate("/main");
    }
  }

  function hoverTypeAdd(type: string) {
    setState((prevState) => ({
      ...prevState,
      type: {
        ...prevState.type,
        hoverType: type,
      },
    }));
  }

  function selectTypeChange(type: string, doraqueType: string) {
    setState((prevState) => ({
      ...prevState,
      type: {
        ...prevState.type,
        selectType: type,
        doraqueType: doraqueType,
      },
    }));
  }

  function pushImageType(type: LastPushBottunState) {
    setState((prevState) => ({
      ...prevState,
      type: {
        ...prevState.type,
        lastPush: type,
      },
    }));
  }
  function handleLoadingChange(newValue: boolean) {
    setState((prevState) => ({
      ...prevState,
      type: {
        ...prevState.type,
        loading: newValue,
      },
    }));
  }
  function formAdd(newValue: string) {
    setState({ ...state, textForm: state.textForm + newValue + "\n" });
  }
  function onChangeForm(newValue: string, key: "textForm" | "titleForm") {
    setState({ ...state, [key]: newValue });
  }
  function svgSaveToState(svg: SVGSVGElement | null | undefined) {
    setState({ ...state, responseSvg: svg });
  }
  function svgDownload() {
    const pdfOptions = {
      filename: "download.pdf",
    };
    html2pdf(state.responseSvg, pdfOptions);
  }
  function svgDLSavePage() {
    const pdfOptions = {
      filename: state.titleForm + ".pdf",
    };
    html2pdf(state.responseSvg, pdfOptions);
  }

  function localSaveClick() {
    setState((prevState) => ({
      ...prevState,
      textForm: "",
    }));
    pushSave(state.titleForm);
  }

  return (
    <MainContext.Provider
      value={{
        user: state.user,
        type: {
          displayType: displayType,
          selectType: state.type.selectType,
          doraqueType: state.type.doraqueType,
          lastPush: state.type.lastPush,
          hoverType: state.type.hoverType,
          open: state.type.open,
          loading: state.type.loading,
          isMobile: state.type.isMobile,
        },
        onClickSidebarButton: onClickSidebarButton,
        selectTypeChange: selectTypeChange,
        handleClose: handleClose,
        SlideTransition: SlideTransition,
        SVGProps: SVGProps,
        pushGo: pushGo,
        pushSave: pushSave,
        pushBack: pushBack,
        hoverTypeAdd: hoverTypeAdd,
        pushImageType: pushImageType,
        handleLoadingChange: handleLoadingChange,
        formAdd: formAdd,
        onChangeForm: onChangeForm,
        svgSaveToState: svgSaveToState,
        svgDownload: svgDownload,
        svgDLSavePage: svgDLSavePage,
        localSaveClick: localSaveClick,
        GPTs: state.GPTs,
        FromGPT: state.FromGPT,
        slide: slide,
        textForm: state.textForm,
        titleForm: state.titleForm,
      }}
    >
      <Main setUserGPTs={setUserGPTs} />
    </MainContext.Provider>
  );
}

export default Context;
