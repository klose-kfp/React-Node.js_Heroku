import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import "./Animation.css";

gsap.registerPlugin(TextPlugin);

export default function LoginTypingAnimation() {
  const textRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = [
      "clientは生成リクエストをServerに送信する",
      "Serverは生成スクリプトを起動する",
      "ServerはDBに生成IDを記録する",
      "ServerはClientに生成IDを返却する",
      "ClientはServerの生成状態確認APIを呼び出す",
      "生成状態が生成中の場合、",
      "1秒待って再度生成状態確認APIを呼び出す",
      "生成状態が生成完了になったら、",
      "結果画面に遷移する",
    ];

    const tl = gsap.timeline();

    lines.forEach((line) => {
      const lineDiv: HTMLDivElement = document.createElement("div");
      lineDiv.className = "line";
      lineDiv.style.opacity = "0";
      lineDiv.style.paddingBottom = "2%";
      textRef.current?.appendChild(lineDiv);

      tl.to(lineDiv, {
        text: line,
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out",
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className="TextTyping w-full hidden md:block md:w-4/12 pt-4 md:!pt-0 pl-2 md:pl-24 text-sm"
      ref={textRef}
    ></div>
  );
}
