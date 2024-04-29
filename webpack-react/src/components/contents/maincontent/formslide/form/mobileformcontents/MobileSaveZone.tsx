import SaveTypingAnimation from "@src/function/SaveTypingAnimation";
import React from "react";
import SaveContents from "../formcontents/savezone/SaveContents";
import ResponseImage from "../../formslidecontent/ResponseImage";

function MobileSaveZone() {
  return (
    <div className="h-full w-full">
      <div className="h-1/3">
        <ResponseImage />
      </div>

      <div className="h-1/3 flex flex-col items-center justify-center">
        <SaveTypingAnimation />
      </div>
      <div className="h-1/3 w-full">
        <SaveContents />
      </div>
    </div>
  );
}
export default MobileSaveZone;
