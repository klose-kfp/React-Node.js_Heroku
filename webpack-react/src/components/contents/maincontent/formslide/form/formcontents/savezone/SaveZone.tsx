import React from "react";
import SaveContents from "./SaveContents";
import SaveTypingAnimation from "@src/function/SaveTypingAnimation";

function SaveZone() {
  return (
    <div className="h-full w-full">
      <div className="h-1/3 flex flex-col items-center justify-center pt-4">
        <SaveTypingAnimation />
      </div>
      <div className="h-1/3 w-full p-4 ">
        <SaveContents />
      </div>
      <div className="h-1/3"></div>
    </div>
  );
}

export default SaveZone;
