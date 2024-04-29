import React, { useRef } from "react";
import "./PostList.css";
import html2pdf from "html2pdf.js";
import { Button } from "@mui/material";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";

type PostProps = {
  SVG_Title: string;
  SVG_base64: string;
  SVG_Update: string;
  index: number;
  clickPost: (clickedIndex: number) => void;
};

function PostList({
  SVG_base64,
  SVG_Title,
  SVG_Update,
  index,
  clickPost,
}: PostProps) {
  const svgRef = useRef<HTMLDivElement | null>(null);

  const decodedSVGString = decodeURIComponent(atob(SVG_base64));
  // 日付をyy/mm/dd形式に変換
  const originalDateTime = new Date(SVG_Update);

  const formattedDateTime = `${(originalDateTime.getFullYear() % 100)
    .toString()
    .padStart(2, "0")}/${(originalDateTime.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${originalDateTime
    .getDate()
    .toString()
    .padStart(2, "0")} ${originalDateTime
    .getHours()
    .toString()
    .padStart(2, "0")}:${originalDateTime
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${originalDateTime
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  const handleDownload = async () => {
    if (svgRef.current) {
      const svgElement = svgRef.current.querySelector("svg");
      if (svgElement) {
        const vertical = (svgElement.clientWidth * 3) / 4;
        const horizontal = (svgElement.clientHeight * 3) / 4;
        const pdfOptions = {
          filename: "document.pdf",
          html2canvas: {
            scale: 2,
          },
          jsPDF: {
            unit: "pt", // ポイント単位を使用
            format: [horizontal, vertical],
            orientation: "portrait",
            putOnlyUsedFonts: true,
          },
          margin: 0,
        };
        html2pdf(svgElement, pdfOptions);
        console.log(pdfOptions);
        console.log(svgElement.clientWidth, svgElement.clientHeight);
      }
    }
  };
  //作成した図を、SVGとしてダウンロード
  const svgDownload = () => {
    if (svgRef.current) {
      const svgElement = svgRef.current.querySelector("svg");
      if (svgElement) {
        const svgData = new XMLSerializer().serializeToString(svgElement);

        // Create a Blob containing the SVG data
        const blob = new Blob([svgData], { type: "image/svg+xml" });

        // Create a link element, set its href to the Blob, and trigger a download
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "document.svg";
        link.click();
      }
    }
  };

  return (
    <div
      className="outline outline-1 outline-gray-200  relative"
      onClick={() => clickPost(index)}
    >
      <div className="flex absolute top-1 md:!top-5 right-1 md:!right-8 text-right">
        <Button
          variant="contained"
          startIcon={<VerticalAlignBottomIcon />}
          sx={{
            width: { xs: "80%", md: "100%" },
            fontSize: { xs: "0.6rem", md: "0.8rem" },
            marginLeft: "2%",
          }}
          onClick={handleDownload}
        >
          PDF
        </Button>
        <Button
          variant="contained"
          startIcon={<VerticalAlignBottomIcon />}
          sx={{
            width: { xs: "80%", md: "100%" },
            fontSize: { xs: "0.6rem", md: "0.8rem" },
            marginLeft: "2%",
          }}
          onClick={svgDownload}
        >
          SVG
        </Button>
      </div>
      <div className="font-zenKurenaido font-semibold ml-8 pt-2">
        title:{SVG_Title}
      </div>
      <div className="font-zenKurenaido font-semibold ml-8">
        Date:{formattedDateTime}
      </div>
      <div
        id="myDiv"
        ref={svgRef}
        className="w-full text-center items-center mt-2 pb-4"
        dangerouslySetInnerHTML={{ __html: decodedSVGString }}
      ></div>
    </div>
  );
}

export default PostList;
