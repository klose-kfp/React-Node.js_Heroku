import React, { useContext } from "react";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import LoadingButton from "@mui/lab/LoadingButton";
import "./Guidance.css";
import { MainContext, MainContextType } from "@src/components/top/Context";
import { Button } from "@mui/material";

function Guidance() {
  const context: MainContextType = useContext(MainContext);
  let next: string = "";

  function nextClickMobile() {
    if (context.type.lastPush == "初期") {
      context.pushImageType("図の種類");
    } else if (context.type.lastPush == "図の種類") {
      context.pushImageType("説明");
    } else if (context.type.lastPush == "説明") {
      goClick();
    }
  }
  function nextClick() {
    if (context.type.lastPush == "初期") {
      context.pushImageType("図の種類");
    } else if (context.type.lastPush == "図の種類") {
      goClick();
    }
  }
  function goClick() {
    context.handleLoadingChange(true);
    context.pushGo(context.textForm);
  }

  if (context.type.lastPush == "初期") {
    next = "NEXT";
  } else if (context.type.lastPush == "Go") {
    next = "SAVE？";
  } else if (context.type.lastPush == "図の種類" && context.type.isMobile) {
    next = "CREATE!";
  } else if (
    context.type.lastPush == "図の種類" &&
    !context.type.isMobile &&
    context.textForm == ""
  ) {
    next = "TEXTを入力";
  } else if (
    context.type.lastPush == "図の種類" &&
    !context.type.isMobile &&
    context.textForm != ""
  ) {
    next = "TEXTに魔法をかける";
  } else if (context.type.lastPush == "説明" && context.textForm == "") {
    next = "TEXTを入力";
  } else if (context.type.lastPush == "説明" && context.textForm != "") {
    next = "魔法をかける";
  }
  return (
    <div className="h-full w-full flex justify-evenly md:justify-normal items-center md:items-end static md:relative">
      <Button
        variant="contained"
        disabled={context.type.lastPush == "初期"}
        startIcon={<SkipPreviousIcon />}
        sx={{
          height: "50%",
          width: { xs: "45%", md: "14%" },
          marginBottom: { xs: "unset", md: "0.5%" }, // スマートフォンの場合は left を解除
          left: { xs: "unset", md: "8%" }, // スマートフォンの場合は left を解除
        }}
        onClick={() => context.pushBack("初期")}
      >
        {context.type.lastPush === "Go" ? "最初へ戻る" : "BACK"}
      </Button>
      <LoadingButton
        size="small"
        disabled={
          context.type.selectType === "" ||
          (context.type.lastPush === "図の種類" &&
            context.textForm === "" &&
            !context.type.isMobile) ||
          (context.type.lastPush === "説明" &&
            context.textForm === "" &&
            context.type.isMobile) ||
          context.type.lastPush === "Go"
        }
        onClick={context.type.isMobile ? nextClickMobile : nextClick}
        endIcon={<SkipNextIcon />}
        loading={context.type.loading}
        loadingPosition="end"
        sx={{
          height: "50%",
          width: { xs: "45%", md: "14%" },
          marginBottom: { xs: "unset", md: "0.5%" }, // スマートフォンの場合は left を解除
          left: { xs: "unset", md: "12%" }, // スマートフォンの場合は left を解除          //  position: "absolute", left: "0.25rem"
          zIndex: "1",
        }}
        variant="contained"
      >
        <span>{next}</span>
      </LoadingButton>
    </div>
  );
}

export default Guidance;
