import { Skeleton } from "@mui/material";
import React from "react";

function LoadingAnimation() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="opacity-0">aaa</div>
      <div className="loading-animation absolute md:static top-8  text-center text-2xl mt-2 md:mt-4 mb-8">
        Ich möchte ein Ingenieur werden. Mein Lieblingsessen ist Sara Udon...
      </div>
      <Skeleton
        variant="rounded"
        sx={{ width: "60%", height: "20%", opacity: "0.7" }}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        sx={{ width: "60%", height: "10%", opacity: "0.7", marginTop: "3%" }}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        sx={{ width: "60%", height: "10%", opacity: "0.7", marginTop: "3%" }}
        animation="wave"
      />
    </div>
  );
}

export default LoadingAnimation;
