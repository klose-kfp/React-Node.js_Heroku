import React, { useContext } from "react";
import "./Contents.css";
import Header from "../header/Header";
import MainContent from "./maincontent/MainContent";
import { MainContext, MainContextType } from "../top/Context";
import { Snackbar } from "@mui/material";

function Contents() {
  const context: MainContextType = useContext(MainContext);
  return (
    <div className="content flex flex-col-reverse md:!flex-col">
      <Header />
      <MainContent />
      <Snackbar
        open={context.type.open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={60000}
        TransitionComponent={context.SlideTransition}
        message="保存が完了しました!! Good Job!!"
        onClose={context.handleClose}
        sx={{
          backgroundColor: "black",
          "& .MuiPaper-root": {
            display: context.type.open == false ? "none" : "flex",
            backgroundColor: "black",
          },
          "& .MuiSnackbarContent-message": {
            backgroundColor: "black",
          },
          "& .MuiSnackbarContent-action": {
            backgroundColor: "black",
          },
        }}
      ></Snackbar>
    </div>
  );
}

export default Contents;
