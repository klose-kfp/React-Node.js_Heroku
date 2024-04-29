import React, { useContext } from "react";
import "./Form.css";
import { MainContext, MainContextType } from "@src/components/top/Context";
import TypeSelectZone from "./formcontents/typeselectzone/TypeSelectZone";
import InputTextZone from "./formcontents/inputtextzone/InputTextZone";
import SaveZone from "./formcontents/savezone/SaveZone";

function Form() {
  const context: MainContextType = useContext(MainContext);

  if (context.type.lastPush == "初期") {
    return (
      <div className="w-full">
        <TypeSelectZone />
      </div>
    );
  } else if (context.type.lastPush == "図の種類") {
    return (
      <div className="form-zone h-full w-full flex flex-column relative items-center">
        <InputTextZone />
      </div>
    );
  } else if (context.type.lastPush == "Go") {
    return (
      <div className="h-full w-full">
        <SaveZone />
      </div>
    );
  }
}

export default Form;
