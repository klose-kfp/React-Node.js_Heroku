import React, { useContext } from "react";
import { MainContext, MainContextType } from "@src/components/top/Context";
import FirstGuidance from "./firstguidance/FirstGuidance";
import ResponseImage from "./ResponseImage";

function FormSlideContents() {
  const context: MainContextType = useContext(MainContext);
  if (context.type.lastPush == "初期") {
    return <FirstGuidance />;
  } else if (context.type.lastPush == "図の種類") {
    return <FirstGuidance />;
  } else if (context.type.lastPush == "Go") {
    return <ResponseImage />;
  }
}

export default FormSlideContents;
