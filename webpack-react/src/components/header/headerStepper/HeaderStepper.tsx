import React, { useContext } from "react";
import { MainContext, MainContextType } from "@src/components/top/Context";
import { Box, Step, StepLabel, Stepper } from "@mui/material";

const steps = [
  "図の種類を選ぼう",
  "TEXTに魔法をかけよう！",
  "気に入れば画像を保存しよう！",
];

function HeaderStepper() {
  const context: MainContextType = useContext(MainContext);

  let activeStep: number = 0;
  if (context.type.selectType != "" && context.type.lastPush == "図の種類") {
    activeStep = 1;
  } else if (context.type.selectType != "" && context.type.lastPush == "Go") {
    activeStep = 2;
  } else if (context.type.selectType != "" && context.type.lastPush == "初期") {
    activeStep = 0;
  }

  return (
    <div className="h-hull md:pl-8">
      <Box
        sx={{
          position: "absolute",
          width: "50%",
          right: "10%",
          display: { xs: "none", md: "block" }, // スマートフォンの場合は非表示
        }}
      >
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{ height: "90%", marginTop: "0.5%" }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                className={
                  activeStep == index ? "steplabel nowstep" : "steplabel"
                }
                sx={{ width: "100%" }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}

export default HeaderStepper;
