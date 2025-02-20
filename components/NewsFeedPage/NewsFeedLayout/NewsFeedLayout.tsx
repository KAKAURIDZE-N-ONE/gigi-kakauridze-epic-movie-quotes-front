import PencilSquare from "@/svgs/PencilSquare";
import React from "react";

const NewsFeedLayout: React.FC = () => {
  return (
    <div className="mt-[7.5rem]">
      <div className=" px-[2.1875rem]">
        <div className="inline-block">
          <div className="flex items-center gap-3 cursor-pointer">
            <PencilSquare />
            <h2>Write new quote</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col "></div>
    </div>
  );
};

export default NewsFeedLayout;
