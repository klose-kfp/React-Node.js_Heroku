import React from "react";
import MermaidSVG from "@src/Mermaid/MermaidSVG";
import { GPT } from "@src/components/top/Context";

type SvgImageProps = {
  clickedGPT: GPT;
};

function ClickedContents({ clickedGPT }: SvgImageProps) {
  let EditMermaid: string = "";
  if (clickedGPT.Mermaid) {
    EditMermaid = clickedGPT.Mermaid.replace(/1234567890/g, "\n");
    return (
      <div className="h-full pt-4 pr-4 pl-12 overflow-y-scroll hidden-scrollbar">
        <div className="flex">
          <div className="font-zenKurenaido font-semibold mr-4">title:</div>
          <div className="pb-2 font-zenKurenaido font-semibold">
            {clickedGPT.Title}
          </div>
        </div>
        <MermaidSVG EditMermaid={EditMermaid} />
        <div>
          <div className="font-zenKurenaido pt-4">日本語テキスト:</div>
          <div className="pb-4 whitespace-pre-line">{clickedGPT.text}</div>
        </div>
        <div>
          <div>
            <div className="font-zenKurenaido"> マーメイド構文:</div>
            <div className="pb-4 whitespace-pre-line">{clickedGPT.Mermaid}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="font-zenKurenaido font-semibold h-full w-full justify-center text-3xl flex align-items-center pb-32">
        Image Click!!
      </div>
    );
  }
}

export default ClickedContents;
