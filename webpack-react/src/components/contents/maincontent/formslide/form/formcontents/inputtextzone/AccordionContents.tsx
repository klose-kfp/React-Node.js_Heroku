import React, { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BasicTabs from "./CustomTabPanel";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { MainContext, MainContextType } from "@src/components/top/Context";

type FormState = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
};

function AccordionContents() {
  const context: MainContextType = useContext(MainContext);

  const [state, setState] = useState<FormState>({
    text1: "",
    text2: "",
    text3: "",
    text4: "",
  });
  function textAdd() {
    if (state.text1 && state.text2 && state.text3) {
      const addText: string =
        state.text1 + "-->" + state.text2 + " : " + state.text3;
      context.formAdd(addText);
      setState({ ...state, text1: "", text2: "", text3: "" });
    }
  }
  function ifTextAdd() {
    if (state.text4) {
      const addIfText: string = state.text4 + "の場合";
      context.formAdd(addIfText);
      setState({ ...state, text4: "" });
    }
  }

  return (
    <div className="addtext relative flex justify-center">
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        sx={{
          display: { xs: "none", md: "unset" },
          width: "100%",
          backgroundColor: "#98fb98!important",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "black",
                backgroundColor: "#98fb98!important",
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>HELP</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <BasicTabs
              textAdd={textAdd}
              ifTextAdd={ifTextAdd}
              text1={state.text1}
              text2={state.text2}
              text3={state.text3}
              text4={state.text4}
              onChange1={(newValue: string) =>
                setState({ ...state, text1: newValue })
              }
              onChange2={(newValue: string) =>
                setState({ ...state, text2: newValue })
              }
              onChange3={(newValue: string) =>
                setState({ ...state, text3: newValue })
              }
              onChange4={(newValue: string) =>
                setState({ ...state, text4: newValue })
              }
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionContents;
