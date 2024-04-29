import React from "react";
import TypeSelectButton from "./TypeSelectButton";

function TypeSelectZone() {
  const List = [
    {
      selectTypeList: "シーケンス図",
      ImageList: "sikensuzu",
      doraqueTypeList: "しーけんすず",
    },
    {
      selectTypeList: "aaa",
      ImageList: "sikensuzu",
      doraqueTypeList: "しーけんすず",
    },
    {
      selectTypeList: "aaa",
      ImageList: "sikensuzu",
      doraqueTypeList: "しーけんすず",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap md:justify-evenly w-full">
        {List.map(
          (type: {
            selectTypeList: string;
            ImageList: string;
            doraqueTypeList: string;
          }) => (
            <TypeSelectButton
              type={type.selectTypeList}
              imagetype={type.ImageList}
              doraqueTypeList={type.doraqueTypeList}
            />
          )
        )}
      </div>
    </div>
  );
}

export default TypeSelectZone;
