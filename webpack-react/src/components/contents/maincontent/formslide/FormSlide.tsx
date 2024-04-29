import React, { useContext } from "react";
import "./FormSlide.css";
import Split from "react-split";
import { MainContext, MainContextType } from "@src/components/top/Context";

import Form from "./form/Form";
import MobileForm from "./form/MobileForm";
import FormSlideContents from "./formslidecontent/FormSlideContents";
import LoadingAnimation from "@src/function/LoadingAnimation";

function FormSlide() {
  const context: MainContextType = useContext(MainContext);

  if (context.type.loading === true) {
    return <LoadingAnimation />;
  } else if (context.type.loading === false) {
    if (context.type.isMobile) {
      return <MobileForm />;
    } else if (!context.type.isMobile) {
      return (
        <Split
          className="flex h-full w-hull"
          gutter={() => {
            const gutterElement = document.createElement("div");
            gutterElement.className = `gutter1`;
            return gutterElement;
          }}
          gutterStyle={() => ({})}
          sizes={[50, 50]}
        >
          <Form />
          <FormSlideContents />
        </Split>
      );
    }
  }
}

export default FormSlide;
