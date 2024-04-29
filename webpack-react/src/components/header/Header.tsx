import React, { useContext } from "react";
import "./Header.css";

import Guidance from "./guidance/Guidance";
import { MainContext, MainContextType } from "@src/components/top/Context";
import HeaderStepper from "./headerStepper/HeaderStepper";

function Header() {
  const context: MainContextType = useContext(MainContext);

  if (context.type.displayType == "form") {
    return (
      <nav className="header w-full flex justify-around fixed bottom-0 md:static z-99">
        <Guidance />
        <HeaderStepper />
      </nav>
    );
  } else if (context.type.displayType == "past") {
    return;
  }
}

export default Header;
