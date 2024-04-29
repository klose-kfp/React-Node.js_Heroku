import React from "react";
import mermaid from "mermaid";
import { useEffect, useRef } from "react";

import "./Mermaid.css";

function MermaidTemp() {
  const svgRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  const src: string =
    "sequenceDiagram" +
    "\n" +
    "participant A" +
    "\n" +
    "participant B" +
    "\n" +
    "participant C" +
    "\n" +
    "A->>B: リクエスト" +
    "\n" +
    "B->>C: リクエスト" +
    "\n" +
    "alt リクエストが不成立の場合" +
    "\n" +
    "C-->>B: 400エラー" +
    "\n" +
    "B-->>A: 400エラー" +
    "\n" +
    "else" +
    "\n" +
    "C-->>A: レスポンス" +
    "\n" +
    "end";

  useEffect(() => {
    if (src) {
      const doc: HTMLElement | null = document.getElementById("temp");
      if (doc) {
        mermaid.initialize({
          theme: "base",
          themeVariables: {
            primaryColor: "#6A7FAB",
            primaryTextColor: "#FAFBF9",
            primaryBorderColor: "#6A7FAB",
            lineColor: "#6A7FABCC",
            textColor: "#6A7FABCC",
            fontSize: "100px",
          },
        });
        mermaid.run({
          nodes: [doc],
        });
      }
    }
  }, [src]);
  return (
    <div className="mermaids-temp" id="temp" key={src} ref={svgRef}>
      {src}
    </div>
  );
}

export default MermaidTemp;
