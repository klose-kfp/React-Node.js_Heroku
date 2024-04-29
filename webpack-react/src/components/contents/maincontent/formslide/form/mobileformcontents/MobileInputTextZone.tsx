import React, { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import { MainContext, MainContextType } from "@src/components/top/Context";
import AccordionContents from "../formcontents/inputtextzone/AccordionContents";
import MobileModal from "./MobileModal";

function MobileInputTextZone() {
  const context: MainContextType = useContext(MainContext);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="h-full w-full flex flex-col items-center">
      <Button
        variant="contained"
        sx={{
          display: { xs: "unset", md: "none" },
          height: "7%",
          width: { xs: "50%", md: "unset" },
          fontSize: "0.8rem",
          marginTop: "10%",
          marginLeft: "2%",
          marginBottom: "10%",
        }}
        onClick={handleOpen}
      >
        参考テンプレ
      </Button>

      <AccordionContents />
      <div className="form w-full flex justify-center mt-2">
        <TextField
          id="standard-multiline-static"
          placeholder="TEXTを入力"
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
      <MobileModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default MobileInputTextZone;
