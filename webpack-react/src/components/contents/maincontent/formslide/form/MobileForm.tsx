import React, { useContext } from "react";
import "./Form.css";
import { MainContext, MainContextType } from "@src/components/top/Context";
import TypeSelectZone from "./formcontents/typeselectzone/TypeSelectZone";
import MobileInputTextZone from "./mobileformcontents/MobileInputTextZone";
import MobileSaveZone from "./mobileformcontents/MobileSaveZone";
import TemplateText from "../formslidecontent/TemplateText";

function MobileForm() {
  const context: MainContextType = useContext(MainContext);

  if (context.type.lastPush == "初期") {
    return (
      <div className="w-full">
        <TypeSelectZone />
      </div>
    );
  } else if (context.type.lastPush == "図の種類") {
    return (
      <div className="form-zone pt-2 h-full w-full flex flex-column relative items-center">
        <TemplateText />
      </div>
    );
  } else if (context.type.lastPush == "説明") {
    return (
      <div className="form-zone h-full w-full flex flex-column relative items-center">
        <MobileInputTextZone />
      </div>
    );
  } else if (context.type.lastPush == "Go") {
    return (
      <div className="h-full w-full">
        <MobileSaveZone />
      </div>
    );
  }
}

export default MobileForm;
