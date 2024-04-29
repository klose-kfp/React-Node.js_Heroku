import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import { MainContext, MainContextType } from "@src/components/top/Context";

function SaveContents() {
  const context: MainContextType = useContext(MainContext);

  return (
    <div>
      <div className="form-save-title text-center pb-4">
        <TextField
          placeholder="TITLEを入力"
          multiline
          rows={2}
          value={context.titleForm}
          variant="standard"
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => context.onChangeForm(e.target.value, "titleForm")}
          style={{
            backgroundColor: "white",
            width: "70%",
          }}
        />
      </div>
      <div className="text-center">
        <Button
          disabled={context.titleForm == ""}
          className="btns"
          variant="contained"
          endIcon={context.type.isMobile ? "" : <VerticalAlignBottomIcon />}
          sx={{ height: "70%", width: { xs: "30%", md: "unset" } }}
          onClick={context.localSaveClick}
        >
          {context.type.isMobile ? "保存" : "サイト内保存"}
        </Button>
        <Button
          disabled={context.titleForm == ""}
          variant="contained"
          endIcon={context.type.isMobile ? "" : <VerticalAlignBottomIcon />}
          sx={{
            height: "70%",
            width: { xs: "30%", md: "unset" },
            fontSize: "0.8rem",
            marginLeft: "2%",
          }}
          onClick={context.svgDLSavePage}
        >
          PDF
        </Button>

        <Button
          className="btns"
          variant="contained"
          sx={{
            height: "70%",
            width: { xs: "30%", md: "unset" },
            fontSize: { xs: "0.8rem", md: "unset" },
            marginLeft: "2%",
          }}
          onClick={
            context.type.isMobile
              ? () => context.pushBack("説明")
              : () => context.pushBack("図の種類")
          }
        >
          やり直す
        </Button>
      </div>
    </div>
  );
}

export default SaveContents;
