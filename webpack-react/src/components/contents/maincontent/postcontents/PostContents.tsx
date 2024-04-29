import React, { useContext, useState } from "react";

import Split from "react-split";
import { GPT, MainContext, MainContextType } from "@src/components/top/Context";
import ClickedContents from "./PostSvgContents/ClickedContents";
import PostList from "./PostSvgContents/PostList";

function PostContents() {
  const context: MainContextType = useContext(MainContext);
  const [state, setState] = useState<GPT>({
    loginUser: "",
    Title: "",
    Mermaid: "",
    svg: "",
    text: "",
    UpdatedDate: "",
  });
  function clickPost(clickedIndex: number) {
    setState(context.GPTs[clickedIndex]);
  }
  if (context.type.isMobile) {
    return (
      <div className="h-full overflow-y-scroll hidden-scrollbar">
        {context.GPTs.map((GPT: any, index: number) => (
          <PostList
            index={index}
            SVG_base64={GPT.svg}
            SVG_Title={GPT.Title}
            SVG_Update={GPT.UpdatedDate}
            clickPost={(clickedIndex: number) => clickPost(clickedIndex)}
          />
        ))}
      </div>
    );
  } else if (!context.type.isMobile) {
    return (
      <Split
        className="flex h-full"
        gutter={() => {
          const gutterElement = document.createElement("div");
          gutterElement.className = `gutter1 `;
          return gutterElement;
        }}
        gutterStyle={() => ({})}
        sizes={[40, 60]}
      >
        <div className="h-full overflow-y-scroll hidden-scrollbar">
          {context.GPTs.map((GPT: any, index: number) => (
            <PostList
              index={index}
              SVG_base64={GPT.svg}
              SVG_Title={GPT.Title}
              SVG_Update={GPT.UpdatedDate}
              clickPost={(clickedIndex: number) => clickPost(clickedIndex)}
            />
          ))}
        </div>
        <div>
          <ClickedContents clickedGPT={state} />
        </div>
      </Split>
    );
  }
}

export default PostContents;
