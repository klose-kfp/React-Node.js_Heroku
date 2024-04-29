import React from "react";
import { MainContext, MainContextType } from "@src/components/top/Context";
import { useContext } from "react";
import "./MainContent.css";

//App.tsxで、slideの内容を指定
function MainContent() {
  const context: MainContextType = useContext(MainContext);
  if (context.type.displayType == "form") {
    return (
      <div className="maincontent w-full fixed md:static overflow-y-scroll md:!overflow-y-auto">
        {context.slide}
      </div>
    );
  } else if (context.type.displayType == "past") {
    return <div className="h-full">{context.slide}</div>;
  }
}

export default MainContent;
