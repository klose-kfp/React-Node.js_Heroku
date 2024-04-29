import { MainContext, MainContextType } from "@src/components/top/Context";
import React, { useContext } from "react";
import TemplateText from "../TemplateText";

function FirstGuidance() {
  const context: MainContextType = useContext(MainContext);

  if (
    context.type.selectType == "シーケンス図" ||
    context.type.hoverType == "シーケンス図"
  ) {
    return (
      <div className="h-full w-full">
        <TemplateText />
      </div>
    );
  } else if (
    context.type.selectType == "aaa" ||
    context.type.hoverType == "aaa"
  ) {
    return <div className="h-full">aaa</div>;
  } else {
    return <div className="h-full"></div>;
  }
}
export default FirstGuidance;
