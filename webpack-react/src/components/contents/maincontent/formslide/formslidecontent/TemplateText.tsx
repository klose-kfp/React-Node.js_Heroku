import React, { useState } from "react";
import "./TemplateText.css";

import { Button } from "@mui/material";
import MermaidTemp from "@src/Mermaid/MermaidTemp";

type TemplateTextState = "image" | "text";

function TemplateText() {
  const [state, setState] = useState<TemplateTextState>("text");

  const text =
    "1.AからB :リクエスト" +
    "\n" +
    "2.BからC :リクエスト" +
    "\n" +
    "3リクエスト不成立の場合" +
    "\n" +
    "3.1 CからB :400エラー" +
    "\n" +
    "3.2 BからA :400エラー" +
    "\n" +
    "4.CからA :レスポンス";
  function imageClick() {
    setState("image");
  }
  function textClick() {
    setState("text");
  }

  return (
    <div className="h-full w-full  overflow-y-auto md:overflow-y-scroll">
      <div className="template-nav flex justify-center">
        <Button
          disabled={state == "image"}
          variant="contained"
          sx={{
            height: "80%",
            color: "black",
            backgroundColor: "rgba(0, 0, 0, 0.12)",
            ":hover": {
              backgroundColor: "aqua",
              color: "black",
            },
            ":disabled": {
              backgroundColor: "#1976d2",
              color: "white",
            },
          }}
          onClick={imageClick}
        >
          図
        </Button>
        <Button
          disabled={state == "text"}
          variant="contained"
          sx={{
            height: "80%",
            marginLeft: "2%",
            color: "black",
            backgroundColor: "rgba(0, 0, 0, 0.12)",
            ":hover": {
              backgroundColor: "aqua",
              color: "black",
            },
            ":disabled": {
              backgroundColor: "#1976d2",
              color: "white",
            },
          }}
          onClick={textClick}
        >
          TEXT
        </Button>
      </div>

      <div className="template">
        <h1 className="template-title font-zenKurenaido underline decoration-dotted underline-offset-8 text-center">
          Template
        </h1>
        {state == "image" ? (
          <div className="template-temp">
            <MermaidTemp />
            <div className="font-zenKurenaido pb-1 pt-1 md:pr-28 text-center">
              日本語テキスト:
            </div>
            <div className="template-text whitespace-pre-line">{text}</div>
          </div>
        ) : (
          <div className="template-temp">
            <div className="font-zenKurenaido pb-1 pt-1 md:pr-28 text-center">
              日本語テキスト:
            </div>
            <div className="template-text whitespace-pre-line">{text} </div>
            <MermaidTemp />
          </div>
        )}
      </div>
    </div>
  );
}

export default TemplateText;
