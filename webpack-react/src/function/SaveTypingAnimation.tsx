import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import "./Animation.css";
import { MainContext, MainContextType } from "@src/components/top/Context";

gsap.registerPlugin(TextPlugin);

export default function SaveTypingAnimation() {
  const context: MainContextType = useContext(MainContext);
  const textRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = [
      "「テキストさんが、",
      `${context.type.doraqueType} に かえられてしまいました．．`,
      " ",
      " ",
      `あなた は どうする？？」 　｛`,
    ];

    const tl = gsap.timeline();

    lines.forEach((line) => {
      const lineDiv: HTMLDivElement = document.createElement("div");
      lineDiv.className = "line md:bg-black";
      lineDiv.style.opacity = "0";
      textRef.current?.appendChild(lineDiv);

      tl.to(lineDiv, {
        text: line,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className="save-text-typing md:bg-black md:text-white md:!text-left md:rounded md:border-4 md:border-white md:pb-8 md:pl-8"
      ref={textRef}
    ></div>
  );
}
