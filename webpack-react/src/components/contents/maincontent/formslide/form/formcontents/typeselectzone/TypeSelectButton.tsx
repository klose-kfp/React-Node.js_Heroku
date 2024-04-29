import { Fab } from "@mui/material";
import { MainContext, MainContextType } from "@src/components/top/Context";
import React, { useContext } from "react";

type TypeSelectButtonProps = {
  type: string;
  imagetype: string;
  doraqueTypeList: string;
};

function TypeSelectButton({
  type,
  imagetype,
  doraqueTypeList,
}: TypeSelectButtonProps) {
  const context: MainContextType = useContext(MainContext);

  const box1: HTMLElement | null = document.getElementById(type);
  if (box1) {
    box1.addEventListener("mouseover", function () {
      context.hoverTypeAdd(type);
    });
    box1.addEventListener("mouseleave", function () {
      context.hoverTypeAdd("");
    });
  }

  return (
    <Fab
      variant="extended"
      className={
        context.type.selectType == type
          ? "!bg-opacity-90 !flex !flex-col !h-1/3 !mt-8 md:!mt-16 !ml-2 md:!ml-4 !pt-2 !pb-2 !text-center !cursor-pointer !bg-blue-800"
          : "!flex !flex-col !h-1/3 !mt-8 md:!mt-16 !ml-2 md:!ml-4 !pt-2 !pb-2 !text-center !cursor-pointer"
      }
      id={type}
      sx={{ backgroundColor: "#CCF", width: { xs: "45%", md: "25%" } }}
      onClick={() => {
        context.selectTypeChange(type, doraqueTypeList);
      }}
      onMouseOver={() => {
        const element: HTMLElement | null = document.getElementById(type);
        if (element) {
          element.style.backgroundColor = "#1565c0";
        }
      }}
      onMouseOut={() => {
        const element: HTMLElement | null = document.getElementById(type);
        if (element) {
          element.style.backgroundColor = "#CCF";
        }
      }}
    >
      <div
        className="mb-2"
        style={{ backgroundColor: "rgba(255,255,255,0)", color: "white" }}
      >
        {type}
      </div>
      <img src={`images/${imagetype}.png`} className="w-9/12" alt={imagetype} />
    </Fab>
  );
}

export default TypeSelectButton;
