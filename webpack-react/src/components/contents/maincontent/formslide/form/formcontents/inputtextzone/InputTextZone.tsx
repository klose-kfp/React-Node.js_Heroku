import React, { useContext } from "react";
import AccordionContents from "./AccordionContents";
import { TextField } from "@mui/material";
import { MainContext, MainContextType } from "@src/components/top/Context";

function InputTextZone() {
  const context: MainContextType = useContext(MainContext);

  return (
    <div className="h-full w-full flex flex-col items-center">
      <AccordionContents />
      <div className="form w-full flex justify-center mt-2">
        <TextField
          id="standard-multiline-static"
          placeholder={"TEXTを入力してください"}
          multiline
          value={context.textForm}
          variant="standard"
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => context.onChangeForm(e.target.value, "textForm")}
          sx={{
            width: "80%",
            height: "100%",
            padding: "2% 2% 2% 2%",
            border: "1px solid #333",
            whiteSpace: "pre-line",
            overflowY: "scroll",
            backgroundColor: "aliceblue",
            "&::-webkit-scrollbar": {
              backgroundColor: "aliceblue",
            },
            "& .MuiInputBase-root": {
              backgroundColor: "aliceblue",
            },
          }}
        />
      </div>
    </div>
  );
}

export default InputTextZone;
