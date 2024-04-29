import React, { useContext } from "react";
import "./ResponseImage.css";
import { MainContext, MainContextType } from "@src/components/top/Context";
import MermaidForm from "@src/Mermaid/MermaidForm";

function ResponseImage() {
  const context: MainContextType = useContext(MainContext);
  return (
    <div className="h-full w-full overflow-y-scroll hidden-scrollbar">
      <MermaidForm src={context.FromGPT.MermaidText} />
    </div>
  );
}

export default ResponseImage;
