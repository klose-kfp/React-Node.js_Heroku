import React, { useEffect } from "react";
import gsap from "gsap";
import type { SVGProps } from "react";
import "./Svg.css";

const Svg = (props: SVGProps<SVGSVGElement>) => {
  useEffect(() => {
    const tl = gsap.timeline();

    // ログインページにてテキストと同時に出現するアニメーション
    tl.to(
      ".First",
      {
        duration: 2.5,
        autoAlpha: 1,
        opacity: 1,
        ease: "power4.out",
      },
      "=0.5"
    );

    tl.to(
      ".Second",
      { duration: 2.5, autoAlpha: 1, opacity: 1, ease: "power4.out" },
      "-=0.5"
    );
    tl.to(
      ".Third",
      { duration: 2.5, autoAlpha: 1, opacity: 1, ease: "power4.out" },
      "-=0.5"
    );
    tl.to(
      ".Forth",
      { duration: 2.5, autoAlpha: 1, opacity: 1, ease: "power4.out" },
      "-=0.5"
    );
    tl.to(
      ".Fifth",
      { duration: 2.5, autoAlpha: 1, opacity: 1, ease: "power4.out" },
      "-=0.5"
    );
    tl.to(
      ".Sixth",
      { duration: 2.5, autoAlpha: 1, opacity: 1, ease: "power4.out" },
      "-=0.5"
    );
    tl.to(
      ".Seventh",
      { duration: 2.5, autoAlpha: 1, opacity: 1, ease: "power4.out" },
      "-=0.5"
    );
    tl.to(
      ".Eighth",
      { duration: 2.5, autoAlpha: 1, opacity: 1, ease: "power4.out" },
      "-=0.5"
    );
    tl.to(
      ".Ninth",
      { duration: 2.5, autoAlpha: 1, opacity: 1, ease: "power4.out" },
      "-=0.5"
    );

    // アニメーションを再生
    tl.play();
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="document_svg__mermaid-1702512478281"
      style={{
        fontFamily: "&quot",
        fontSize: 100,
        fill: "rgb(8 79 231 / 95%)",
        fontWeight: 500,
      }}
      viewBox="-50 -10 757 761"
      {...props}
    >
      <rect
        width={150}
        height={65}
        opacity={0}
        x={507}
        y={675}
        stroke="#6A7FABCC"
        className="Third document_svg__actor"
        rx={3}
        ry={3}
      />
      <text
        x={582}
        y={707.5}
        opacity={0}
        alignmentBaseline="central"
        className="Third document_svg__actor"
        dominantBaseline="central"
        style={{
          textAnchor: "middle",
          fontSize: 16,
          fontWeight: 500,
          opacity: 0,
        }}
      >
        <tspan x={582} dy={0}>
          {"DB"}
        </tspan>
      </text>
      <rect
        width={150}
        height={65}
        x={277}
        y={675}
        opacity={0}
        stroke="#666"
        className="First document_svg__actor"
        rx={3}
        ry={3}
      />
      <text
        x={352}
        y={707.5}
        alignmentBaseline="central"
        opacity={0}
        className="First document_svg__actor"
        dominantBaseline="central"
        style={{
          textAnchor: "middle",
          fontSize: 16,
        }}
      >
        <tspan x={352} dy={0}>
          {"Server"}
        </tspan>
      </text>
      <rect
        width={150}
        height={65}
        y={675}
        stroke="#666"
        opacity={0}
        className="First document_svg__actor"
        rx={3}
        ry={3}
      />
      <text
        x={75}
        y={707.5}
        alignmentBaseline="central"
        opacity={0}
        className="First document_svg__actor"
        dominantBaseline="central"
        style={{
          textAnchor: "middle",
          fontSize: 16,
        }}
      >
        <tspan x={75} dy={0}>
          {"Client"}
        </tspan>
      </text>
      <path
        id="document_svg__actor5"
        opacity={0}
        stroke="#999"
        strokeWidth={1}
        d="M582 5v670"
        className="Third document_svg__200"
      />
      <g id="document_svg__root-5">
        <rect
          width={150}
          height={65}
          x={507}
          opacity={0}
          stroke="#666"
          className="Third document_svg__actor"
          rx={3}
          ry={3}
        />
        <text
          x={582}
          y={32.5}
          opacity={0}
          alignmentBaseline="central"
          className="Third document_svg__actor"
          dominantBaseline="central"
          style={{
            textAnchor: "middle",
            fontSize: 16,
          }}
        >
          <tspan x={582} dy={0}>
            {"DB"}
          </tspan>
        </text>
      </g>
      <path
        id="document_svg__actor4"
        stroke="#999"
        opacity={0}
        strokeWidth={1}
        d="M352 5v670"
        className="First document_svg__200"
      />
      <g id="document_svg__root-4">
        <rect
          width={150}
          height={65}
          opacity={0}
          x={277}
          stroke="#666"
          className="First document_svg__actor"
          rx={3}
          ry={3}
        />
        <text
          x={352}
          y={32.5}
          opacity={0}
          alignmentBaseline="central"
          className="First document_svg__actor"
          dominantBaseline="central"
          style={{
            textAnchor: "middle",
            fontSize: 16,
          }}
        >
          <tspan x={352} dy={0}>
            {"Server"}
          </tspan>
        </text>
      </g>
      <path
        id="document_svg__actor3"
        stroke="#999"
        opacity={0}
        strokeWidth={1}
        d="M75 5v670"
        className="First document_svg__200"
      />
      <g id="document_svg__root-3">
        <rect
          width={150}
          height={65}
          opacity={0}
          stroke="#666"
          className="First document_svg__actor"
          rx={3}
          ry={3}
        />
        <text
          x={75}
          y={32.5}
          opacity={0}
          alignmentBaseline="central"
          className="First document_svg__actor"
          dominantBaseline="central"
          style={{
            textAnchor: "middle",
            fontSize: 16,
          }}
        >
          <tspan x={75} dy={0}>
            {"Client"}
          </tspan>
        </text>
      </g>
      <style />
      <defs>
        <symbol id="document_svg__computer">
          <path d="M1 1v6.5h10V1zm9 5.5H2V2h8zm-5.114 3 .233-.5h1.762l.234.5zM12 11H0l1-3h1.052l-.665 2h9.225l-.648-2H11zM9.5 6h-7V2.5h7z" />
        </symbol>
      </defs>
      <defs>
        <symbol
          id="document_svg__database"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="m6.129 0 .128.003.128.002.126.004.126.005.124.006.124.008.123.008.12.009.121.01.12.012.118.012.116.013.116.014.114.016.113.016.111.017.11.018.109.019.106.02.106.02.104.021.102.023.101.023.099.024.097.025.095.026L9.18.4l.091.027.09.028.088.029.086.029.084.03.081.03.08.032.078.032.075.033.037.017.036.016.036.017.035.017.034.018.034.017.034.018.033.017.032.018.032.018.031.018.03.018.03.019.029.018.029.019.027.018.028.02.026.019.026.019.026.019.025.02.024.019.023.02.023.02.022.02.021.02.021.02.02.02.02.02.018.021.018.02.017.021.016.021.016.021.015.021.015.021.013.021.013.021.012.022.012.021.01.022.01.022.01.022.008.021.007.022.007.022.006.022.006.023.004.022.004.022.003.023.002.022v.023L11 1.75v8.523l-.001.022-.002.023-.003.022-.004.023-.004.022-.006.022-.006.022-.006.022-.008.022-.009.022-.009.022-.01.021-.01.022-.012.021-.012.022-.013.021-.013.021-.015.021-.015.021-.016.021-.016.021-.017.02-.018.021-.019.02-.019.021-.02.02-.02.02-.022.02-.022.02-.023.02-.023.02-.024.02-.025.019-.026.02-.026.019-.026.019-.028.019-.027.019-.029.018-.029.019-.03.018-.03.018-.031.018-.032.018-.032.018-.033.018-.034.017-.034.018-.034.017-.035.017-.036.017-.036.017-.037.016-.075.033-.078.032-.08.032-.081.03-.084.03-.086.03-.088.028-.09.028-.091.027-.094.027-.095.025-.097.025-.099.024-.1.023-.103.023-.104.021-.106.02-.107.02-.108.02-.11.018-.111.017-.113.016-.114.015-.116.014-.116.014-.118.012-.12.011-.12.01-.121.01-.123.008-.124.007-.124.006-.126.005-.126.004-.128.003-.128.002h-.258l-.128-.002-.127-.003-.127-.004-.125-.005-.125-.006-.123-.007-.123-.008-.121-.01-.121-.01-.119-.011-.118-.012-.117-.014-.115-.014-.114-.015-.113-.016-.112-.017-.11-.018-.108-.02-.107-.02-.106-.02-.104-.021-.102-.023-.1-.023-.1-.024-.097-.025-.095-.025-.094-.027-.092-.027-.089-.028-.088-.028-.086-.03-.084-.03-.082-.03-.079-.032-.078-.032-.075-.033-.037-.016-.036-.017-.036-.017-.035-.017-.035-.017-.034-.018-.033-.017-.033-.018-.032-.018-.032-.018-.03-.018-.031-.018-.03-.018-.029-.019-.029-.018-.028-.02-.027-.018-.027-.02-.026-.018-.025-.02-.025-.02-.024-.019-.023-.02-.023-.02-.022-.02-.021-.02-.021-.02-.02-.02-.02-.02-.018-.021-.018-.02-.017-.021-.016-.021-.016-.021-.015-.021-.015-.021-.013-.021-.013-.021-.012-.022-.012-.021-.01-.022-.01-.021-.01-.022-.008-.022-.007-.022-.007-.022-.006-.022-.005-.022-.005-.022-.003-.023-.003-.022-.002-.023L1 10.273 1 10.25V1.728l.002-.023.002-.022.003-.023.003-.022.005-.022.005-.023.006-.022.007-.022.007-.022.009-.021.009-.022.01-.022.01-.021.012-.022.012-.022.013-.021.013-.021.015-.021.015-.021.016-.021.016-.021.017-.02.018-.021.018-.02.02-.021.02-.02.02-.02.022-.02.022-.02.023-.02.023-.02.024-.02.025-.019.025-.02.026-.019.027-.019.027-.019.028-.019.029-.018.029-.019.03-.018.03-.018.031-.018.032-.018.032-.018.033-.018.033-.017.034-.017.035-.018.035-.017.036-.017.036-.016.037-.017.075-.033.078-.032.08-.031.081-.031.084-.03.086-.03.088-.028.09-.028L2.82.4l.094-.026.095-.026.098-.025.098-.024.101-.023.102-.023.104-.021.106-.02.107-.02.108-.02.11-.017.112-.017.113-.016.114-.016.115-.014.117-.013.118-.012.119-.012.12-.01.122-.01.123-.007.123-.008.125-.006.125-.005.127-.004.127-.002L5.871 0 6 0zM1.5 10.25v.015l.002.011.002.011.003.01.003.012.003.01.005.012.004.011.006.011.006.012.006.011.008.012.008.012.008.011.01.012.009.012.01.012.011.013.012.012.012.013.026.024.028.025.03.025.033.026.035.025.038.026.04.026.041.026.044.026.046.026.049.026.051.025.053.026.055.026.057.026.059.025.062.026.063.025.066.025.067.025.07.024.072.024.073.024.076.023.078.024.08.022.081.023.084.021.085.022.088.02.089.021.092.02.093.019.095.018.097.018.099.017.1.017.103.015.104.015.106.015.108.013.11.013.11.012.114.01.115.01.116.01.118.007.12.008.122.006.123.005.124.004.127.002.128.002L6 11.5h.13l.129-.003.127-.002.125-.004.123-.006.122-.006.12-.007.119-.008.117-.009.115-.01.113-.01.112-.013.11-.013.108-.013.106-.014.105-.016.103-.015.1-.017.1-.017.097-.018.095-.019.094-.019.091-.02.09-.02.087-.021.086-.022.084-.022.082-.022.08-.023.077-.023.076-.024.074-.024.072-.024.069-.025.068-.025.066-.025.063-.025.061-.025.059-.026.057-.026.055-.026.053-.026.05-.026.049-.025.046-.027.044-.026.041-.025.04-.026.037-.026.035-.026.032-.025.03-.026.028-.025.026-.025.011-.012.012-.012.01-.012.01-.012.01-.012.009-.012.008-.012.008-.012.007-.012.006-.011.006-.012.005-.011.005-.011.004-.011.003-.011.003-.011.002-.011.002-.011v-.01l.001-.011V8.187l-.038.027-.04.027-.042.027-.042.026-.044.026-.045.026-.046.026-.048.025-.048.025-.05.024-.051.025-.053.024-.053.023-.054.024-.056.023-.057.022-.057.023-.06.022-.06.021-.06.021-.062.021-.063.02-.064.02-.065.02-.066.02-.067.019-.068.018-.069.019-.07.017-.07.018-.072.017-.072.016-.073.016-.074.016-.075.015-.076.015-.076.014-.077.014-.078.013-.08.013L8 9.028l-.08.012-.081.011-.082.011-.082.01-.083.01-.084.01-.084.009-.085.009-.085.008-.087.007-.086.007-.088.007-.087.006-.089.005-.089.005-.09.004-.089.004-.09.003-.091.003-.091.002-.092.001-.092.001h-.185l-.092-.001-.092-.001-.091-.002-.091-.003-.091-.003-.09-.004-.089-.004-.089-.005-.088-.005-.088-.006-.087-.007-.087-.007-.086-.007-.085-.008-.085-.009-.085-.009-.083-.01-.083-.01-.083-.01-.081-.011-.081-.011L4 9.028l-.08-.013-.078-.013-.078-.013-.077-.014-.077-.014-.075-.015-.075-.015-.074-.016-.073-.016-.073-.016-.071-.017-.071-.018-.07-.017-.068-.019-.068-.018-.067-.02-.066-.018-.065-.02-.064-.02-.063-.021-.062-.021-.061-.021-.06-.022-.059-.021-.058-.023-.056-.022-.056-.023-.055-.024-.053-.023-.052-.024-.051-.025-.05-.024-.049-.025-.047-.025-.047-.026-.045-.026-.043-.026-.043-.026-.041-.027-.04-.027-.039-.027zm0-2.827v.016l.002.01.002.011.003.011.003.011.003.011.005.011.004.011.006.012.006.011.006.012.008.012.008.011.008.012.01.012.009.012.01.012.011.012.012.012.012.012.026.025.028.025.03.025.033.026.035.025.038.026.04.026.041.026.044.026.046.026.049.026.051.026.053.026.055.025.057.026.059.026.062.025.063.025.066.025.067.025.07.024.072.024.073.024.076.024.078.023.08.022.081.023.084.022.085.021.088.021.089.02.092.02.093.019.095.018.097.018.099.017.1.017.103.016.104.015.106.014.108.013.11.013.11.012.114.011.115.01.116.009.118.008.12.007.122.006.123.005.124.004.127.003.128.001.129.001h.13l.129-.002.127-.003.125-.004.123-.005.122-.006.12-.008.119-.008.117-.009.115-.01.113-.01.112-.013.11-.012.108-.014.106-.014.105-.015.103-.016.1-.017.1-.017.097-.018.095-.019.094-.019.091-.02.09-.02.087-.021.086-.022.084-.022.082-.022.08-.023.077-.023.076-.024.074-.024.072-.024.069-.025.068-.024.066-.025.063-.026.061-.025.059-.026.057-.026.055-.026.053-.026.05-.026.049-.026.046-.026.044-.026.041-.026.04-.026.037-.025.035-.026.032-.026.03-.025.028-.025.026-.025.011-.012.012-.012.01-.013.01-.012.01-.012.009-.012.008-.012.008-.011.007-.012.006-.012.006-.01.005-.012.005-.012.004-.01.003-.012.003-.01.002-.011.002-.011v-.01l.001-.011v-2.07l-.038.027-.04.027-.042.027-.042.026-.044.027-.045.025-.046.026-.048.025-.048.025-.05.025-.051.024-.053.024-.053.024-.054.023-.056.023-.057.023-.057.022-.06.022-.06.022-.06.021-.062.021-.063.02-.064.02-.065.02-.066.02-.067.018-.068.019-.069.018-.07.018-.07.017-.072.017-.072.016-.073.017-.074.015-.075.015-.076.015-.076.014-.077.014-.078.014-.08.013L8 6.194l-.08.012-.081.012-.082.011-.082.01-.083.01-.084.01-.084.009-.085.008-.085.008-.087.008-.086.007-.088.006-.087.006-.089.006-.089.004-.09.005-.089.003-.09.004-.091.002-.091.002-.092.002-.092.001h-.185l-.092-.001-.092-.002-.091-.002-.091-.002-.091-.004-.09-.003-.089-.005-.089-.004-.088-.006-.088-.006L4.92 6.3l-.087-.007-.086-.008-.085-.008-.085-.008-.085-.009-.083-.01-.083-.01-.083-.01-.081-.011-.081-.012L4 6.194l-.08-.012-.078-.013-.078-.014-.077-.014-.077-.014-.075-.015-.075-.015-.074-.015-.073-.017-.073-.016-.071-.017-.071-.017-.07-.018-.068-.018-.068-.019-.067-.019-.066-.019-.065-.02-.064-.02-.063-.02-.062-.021-.061-.022-.06-.021-.059-.022-.058-.022-.056-.023-.056-.023-.055-.023-.053-.023-.052-.025-.051-.024-.05-.025-.049-.025-.047-.025-.047-.026-.045-.025-.043-.027-.043-.026-.041-.027-.04-.027-.039-.027zm0-2.833v.016l.002.01.002.011.003.011.003.01.003.012.005.011.004.011.006.012.006.011.006.012.008.011.008.012.008.012.01.011.009.012.01.013.011.012.012.012.012.012.026.025.028.025.03.025.033.026.035.025.038.026.04.026.041.026.044.026.046.026.049.026.051.026.053.025.055.026.057.026.059.025.062.026.063.025.066.025.067.025.07.024.072.024.073.024.076.024.078.023.08.022.081.023.084.021.085.022.088.021.089.02.092.02.093.019.095.018.097.018.099.017.1.017.103.016.104.015.106.014.108.013.11.013.11.012.114.01.115.01.116.01.118.008.12.007.122.006.123.005.124.004.127.003.128.001L6 5.84h.13l.129-.002.127-.003.125-.004.123-.005.122-.007.12-.007.119-.008.117-.009.115-.01.113-.01.112-.013.11-.012.108-.014.106-.014.105-.015.103-.016.1-.017.1-.017.097-.018.095-.019.094-.019.091-.02.09-.02.087-.021.086-.022.084-.022.082-.022.08-.023.077-.023.076-.024.074-.024.072-.024.069-.025.068-.024.066-.026.063-.025.061-.025.059-.026.057-.026.055-.026.053-.026.05-.026.049-.026.046-.026.044-.026.041-.026.04-.026.037-.026.035-.025.032-.025.03-.026.028-.025.026-.025.011-.012.012-.013.01-.012.01-.012.01-.011.009-.012.008-.012.008-.012.007-.012.006-.011.006-.012.005-.011.005-.011.004-.011.003-.011.003-.011.002-.011.002-.011v-.01l.001-.011V2.514l-.038.027-.04.027-.042.026-.042.027-.044.026-.045.026-.046.025-.048.026-.048.025-.05.024-.051.024-.053.024-.053.024-.054.023-.056.023-.057.023-.057.022-.06.022-.06.022-.06.021-.062.021-.063.02-.064.02-.065.02-.066.02-.067.019-.068.018-.069.018-.07.018-.07.017-.072.017-.072.017-.073.016-.074.016-.075.015-.076.015-.076.014-.077.014-.078.013-.08.013L8 3.354l-.08.012-.081.012-.082.011-.082.01-.083.01-.084.01-.084.009-.085.009-.085.008-.087.007-.086.007-.088.007-.087.006-.089.005-.089.005-.09.004-.089.004-.09.002-.091.004-.091.002-.092.001h-.092L6 3.5h-.092l-.092-.001-.092-.001-.091-.003-.091-.002-.091-.003-.09-.004-.089-.004-.089-.006-.088-.004-.088-.006-.087-.007-.087-.007-.086-.007-.085-.008-.085-.009-.085-.009-.083-.01-.083-.01-.083-.01-.081-.011-.081-.012L4 3.354l-.08-.012-.078-.013-.078-.013-.077-.014-.077-.014-.075-.015-.075-.015-.074-.016-.073-.016-.073-.017-.071-.017-.071-.017-.07-.018-.068-.018-.068-.018-.067-.02-.066-.019-.065-.02-.064-.02-.063-.02L2.505 3l-.061-.021-.06-.022-.059-.022-.058-.022-.056-.023-.056-.023-.055-.023-.053-.024-.052-.024-.051-.024-.05-.025-.049-.024-.047-.026-.047-.025-.045-.026-.043-.026-.043-.027-.041-.026-.04-.027-.039-.027zM5.87.5l-.128.002-.127.003-.125.004-.124.005-.122.006-.12.007-.119.008-.116.01-.116.01-.113.011-.112.011-.11.013-.108.014-.106.014-.105.015-.102.016-.102.017-.099.017-.097.018-.095.019-.094.019-.091.02-.09.02L3.262.8l-.086.022-.084.021-.082.023-.08.023-.077.023-.076.024-.074.024-.072.024-.069.024-.068.025-.066.025-.063.026-.061.025-.059.026-.057.026-.055.026-.053.026-.05.026-.049.026-.046.026-.044.026-.041.026-.04.026-.037.025-.035.026-.032.026-.03.025-.028.025-.026.025-.011.012-.012.012-.01.012-.01.013-.01.012-.009.012-.008.011-.008.012-.007.012-.006.011-.006.012-.005.012-.005.01-.004.011-.003.012-.003.01-.002.011-.002.011v.01L1.5 1.75v.01l.001.011.002.01.002.011.003.011.003.011.004.011.005.011.005.012.006.011.006.012.007.011.008.012.008.012.01.012.009.012.01.012.01.012.012.012.011.013.026.025.028.025.03.025.032.025.035.026.037.026.04.026.041.026.044.026.046.026.048.026.051.026.053.026.055.026.057.026.059.025.061.026.063.025.066.025.068.025.07.025.071.024.074.024.076.024.077.023.08.023.082.022.084.022.086.021.087.021.09.021.091.02.094.019.095.019.097.018.1.017.1.016.103.016.105.016.106.014.108.013.11.013.112.012.113.011.116.01.116.01.119.007.12.007.122.006.124.006.125.004.127.002L5.87 3 6 3h.13l.129-.003.126-.002.125-.004.124-.006.122-.006.12-.007.119-.008.116-.009.116-.01.113-.011.112-.012.11-.013.108-.013.106-.014.105-.016.103-.016.1-.016.1-.017.097-.018.095-.019.094-.019.091-.02.09-.02.087-.022.086-.021.084-.022.082-.022.08-.023.077-.023.076-.024.074-.024.072-.024.069-.025.068-.025.066-.025.063-.025.061-.026.059-.025.057-.026.055-.026.053-.026.05-.026.049-.026.046-.026.044-.026.041-.026.04-.026.037-.026.035-.026.032-.025.03-.025.028-.025.026-.025.011-.013.012-.012.01-.012.01-.012.01-.012.009-.012.008-.012.008-.012.007-.011.006-.012.006-.011.005-.012.005-.01.004-.012.003-.011.003-.01.002-.012.002-.01v-.01l.001-.011v-.01l-.001-.011-.002-.01-.002-.012-.003-.01-.003-.011-.004-.011-.005-.011-.005-.012-.006-.011-.006-.012-.007-.011-.008-.013-.008-.011-.01-.012-.009-.012-.01-.013-.01-.012-.012-.012-.011-.012-.026-.025-.028-.025-.03-.025-.032-.025-.035-.026-.037-.026-.04-.026-.041-.026-.044-.026-.046-.026-.048-.026-.051-.026-.053-.026-.055-.026-.057-.026-.059-.026-.061-.025-.063-.026-.066-.025-.068-.025-.07-.024L9.298.96 9.223.936 9.147.912 9.07.889 8.99.866 8.907.843 8.824.822 8.738.8 8.651.78 8.56.758 8.47.739 8.376.72 8.281.701 8.182.683 8.086.666 7.983.649 7.882.633 7.776.618 7.67.604 7.562.59l-.11-.013L7.34.566 7.227.555l-.116-.01-.116-.01-.119-.008-.12-.007-.122-.006L6.51.51 6.385.505 6.259.502 6.13.5H6z" />
        </symbol>
      </defs>
      <defs>
        <symbol id="document_svg__clock">
          <path d="M6 1c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5m0-1a6 6 0 1 0 0 12A6 6 0 0 0 6 0m2.924 6.23c.101.018.101.166 0 .185-.953.181-3.022.556-3.273.556a.65.65 0 0 1-.65-.65c0-.256.384-2.724.562-3.723.017-.096.156-.09.172.007l.492 3.119z" />
        </symbol>
      </defs>
      <defs>
        <marker
          id="document_svg__arrowhead"
          markerHeight={12}
          markerUnits="userSpaceOnUse"
          markerWidth={12}
          orient="auto"
          refX={7.9}
          refY={5}
        >
          <path
            d="m0 0 10 5-10 5z"
            style={{
              fill: "#6a7fabcc",
              stroke: "#999",
            }}
          />
        </marker>
      </defs>
      <defs>
        <marker
          id="document_svg__crosshead"
          markerHeight={8}
          markerWidth={15}
          orient="auto"
          refX={4}
          refY={4.5}
        >
          <path
            strokeWidth="1pt"
            d="m1 2 5 5m0-5L1 7"
            style={{
              fill: "#6a7fabcc",
              stroke: "#6a7fabcc",
              strokeDasharray: "0,0",
            }}
          />
        </marker>
      </defs>
      <defs>
        <marker
          id="document_svg__filled-head"
          markerHeight={28}
          markerWidth={20}
          orient="auto"
          refX={15.5}
          refY={7}
        >
          <path d="m18 7-9 6 5-6-5-6Z" />
        </marker>
      </defs>
      <defs>
        <marker
          id="document_svg__sequencenumber"
          markerHeight={40}
          markerWidth={60}
          orient="auto"
          refX={15}
          refY={15}
          style={{
            fill: "#6a7fabcc",
          }}
        >
          <circle cx={15} cy={15} r={6} />
        </marker>
      </defs>
      <rect
        width={150}
        height={39}
        x={377}
        y={393}
        opacity={0}
        fill="#ffea00"
        stroke="#666"
        className="Sixth document_svg__note"
        rx={0}
        ry={0}
      />
      <text
        x={452}
        y={398}
        opacity={0}
        alignmentBaseline="middle"
        className="Sixth document_svg__noteText"
        dominantBaseline="middle"
        dy="1em"
        style={{
          fill: "black",
          fontSize: 16,
          fontWeight: 400,
        }}
        textAnchor="middle"
      >
        <tspan
          x={452}
          style={{
            fill: "black",
            opacity: 0.6,
          }}
        >
          {"\u751F\u6210\u4E2D\u306E\u5834\u5408"}
        </tspan>
      </text>
      <rect
        width={180}
        height={39}
        opacity={0}
        x={377}
        y={538}
        fill="#ffea00"
        stroke="#666"
        className="Eighth document_svg__note"
        rx={0}
        ry={0}
      />
      <text
        x={467}
        y={543}
        opacity={0}
        alignmentBaseline="middle"
        className="Eighth document_svg__noteText"
        dominantBaseline="middle"
        dy="1em"
        style={{
          color: "black",
          fontSize: 16,
          fontWeight: 400,
        }}
        textAnchor="middle"
      >
        <tspan
          x={467}
          style={{
            fill: "black",
            opacity: 0.6,
          }}
        >
          {"\u751F\u6210\u5B8C\u4E86\u306B\u306A\u3063\u305F\u5834\u5408"}
        </tspan>
      </text>
      <text
        x={212}
        y={80}
        opacity={0}
        alignmentBaseline="middle"
        className="First document_svg__messageText"
        dominantBaseline="middle"
        dy="1em"
        style={{
          fontSize: 16,
          fontWeight: 400,
        }}
        textAnchor="middle"
      >
        {"\u751F\u6210\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1"}
      </text>
      <path
        strokeWidth={2}
        opacity={0}
        markerEnd="url(#document_svg__arrowhead)"
        d="M76 113h272"
        className="First document_svg__messageLine0"
        style={{
          fill: "none",
          stroke: "#999",
          strokeWidth: 1,
        }}
      />
      <text
        x={353}
        y={128}
        opacity={0}
        alignmentBaseline="middle"
        className="Second document_svg__messageText"
        dominantBaseline="middle"
        dy="1em"
        style={{
          fontSize: 16,
          fontWeight: 400,
        }}
        textAnchor="middle"
      >
        {"\u751F\u6210\u30B9\u30AF\u30EA\u30D7\u30C8\u3092\u8D77\u52D5"}
      </text>
      <path
        strokeWidth={2}
        opacity={0}
        markerEnd="url(#document_svg__arrowhead)"
        d="M353 161c60-10 60 30 0 20"
        className="Second document_svg__messageLine0"
        style={{
          fill: "none",
          stroke: "#999",
          strokeWidth: 1,
        }}
      />
      <text
        x={466}
        y={206}
        opacity={0}
        alignmentBaseline="middle"
        className="Third document_svg__messageText"
        dominantBaseline="middle"
        dy="1em"
        style={{
          fontSize: 16,
          fontWeight: 400,
        }}
        textAnchor="middle"
      >
        {"\u751F\u6210ID\u3092\u8A18\u9332"}
      </text>
      <path
        strokeWidth={2}
        opacity={0}
        markerEnd="url(#document_svg__arrowhead)"
        d="M353 239h225"
        className="Third document_svg__messageLine0"
        style={{
          fill: "none",
          stroke: "#999",
          strokeWidth: 1,
        }}
      />
      <text
        x={215}
        y={254}
        opacity={0}
        alignmentBaseline="middle"
        className="Forth document_svg__messageText"
        dominantBaseline="middle"
        dy="1em"
        style={{
          fontSize: 16,
          fontWeight: 400,
        }}
        textAnchor="middle"
      >
        {"\u751F\u6210ID\u3092\u8FD4\u5374"}
      </text>
      <path
        strokeWidth={2}
        opacity={0}
        markerEnd="url(#document_svg__arrowhead)"
        d="M351 287H79"
        className="Forth document_svg__messageLine1"
        style={{
          strokeDasharray: "3,3",
          fill: "none",
          stroke: "#999",
          strokeWidth: 1,
        }}
      />
      <text
        x={212}
        y={302}
        opacity={0}
        alignmentBaseline="middle"
        className="Fifth document_svg__messageText"
        dominantBaseline="middle"
        dy="1em"
        style={{
          fontSize: 16,
          fontWeight: 400,
        }}
        textAnchor="middle"
      >
        {
          "\u751F\u6210\u72B6\u614B\u78BA\u8A8DAPI\u3092\u547C\u3073\u51FA\u3059"
        }
      </text>
      <path
        strokeWidth={2}
        markerEnd="url(#document_svg__arrowhead)"
        d="M76 335h272"
        opacity={0}
        className="Fifth document_svg__messageLine0"
        style={{
          fill: "none",
          stroke: "#999",
          strokeWidth: 1,
        }}
      />
      <text
        x={215}
        y={350}
        opacity={0}
        alignmentBaseline="middle"
        className="Sixth document_svg__messageText"
        dominantBaseline="middle"
        dy="1em"
        style={{
          fontSize: 16,
          fontWeight: 400,
        }}
        textAnchor="middle"
      >
        {"\u751F\u6210\u72B6\u614B"}
      </text>
      <path
        strokeWidth={2}
        opacity={0}
        markerEnd="url(#document_svg__arrowhead)"
        d="M351 383H79"
        className="Sixth document_svg__messageLine1"
        style={{
          strokeDasharray: "3,3",
          fill: "none",
          stroke: "#999",
          strokeWidth: 1,
        }}
      />
      <text
        x={212}
        y={447}
        opacity={0}
        alignmentBaseline="middle"
        className="Seventh document_svg__messageText"
        dominantBaseline="middle"
        dy="1em"
        style={{
          fontSize: 16,
          fontWeight: 400,
        }}
        textAnchor="middle"
      >
        {
          "1\u79D2\u5F85\u3063\u3066\u518D\u5EA6API\u3092\u547C\u3073\u51FA\u3059"
        }
      </text>
      <path
        strokeWidth={2}
        markerEnd="url(#document_svg__arrowhead)"
        d="M76 480h272"
        opacity={0}
        className="Seventh document_svg__messageLine0"
        style={{
          fill: "none",
          stroke: "#999",
          strokeWidth: 1,
        }}
      />
      <text
        x={215}
        y={495}
        opacity={0}
        alignmentBaseline="middle"
        className="Eighth document_svg__messageText"
        dominantBaseline="middle"
        dy="1em"
        style={{
          fontSize: 16,
          fontWeight: 400,
        }}
        textAnchor="middle"
      >
        {"\u751F\u6210\u72B6\u614B"}
      </text>
      <path
        strokeWidth={2}
        opacity={0}
        markerEnd="url(#document_svg__arrowhead)"
        d="M351 528H79"
        className="Eighth document_svg__messageLine1"
        style={{
          strokeDasharray: "3,3",
          fill: "none",
          stroke: "#999",
          strokeWidth: 1,
        }}
      />
      <text
        x={76}
        y={592}
        opacity={0}
        alignmentBaseline="middle"
        className="Ninth document_svg__messageText"
        dominantBaseline="middle"
        dy="1em"
        style={{
          fontSize: 16,
          fontWeight: 400,
        }}
        textAnchor="middle"
      >
        {"\u7D50\u679C\u753B\u9762\u306B\u9077\u79FB"}
      </text>
      <path
        strokeWidth={2}
        opacity={0}
        markerEnd="url(#document_svg__arrowhead)"
        d="M76 625c60-10 60 30 0 20"
        className="Ninth document_svg__messageLine0"
        style={{
          fill: "none",
          stroke: "#999",
          strokeWidth: 1,
        }}
      />
    </svg>
  );
};
export default Svg;
