import React from "react";
import { Props } from "./types";
import Comment from "@/svgs/Comment";
import Heart from "@/svgs/Heart";
import ThreeDots from "@/svgs/ThreeDots";
import useDesktopQuote from "./useDesktopQuote";

const DesktopQuote: React.FC<Props> = ({ quote }) => {
  const { language } = useDesktopQuote();

  return (
    <div className="bg-darkerBlue py-6  px-[2.1875rem] relative lg:rounded-[0.625rem] flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="absolute cursor-pointer px-3 py-1 lg:px-0  bottom-6 right-6 lg:right-7 lg:top-4">
          <ThreeDots />
        </div>
        <div
          style={{
            backgroundImage: `url(${quote?.image})`,
          }}
          className="aspect-[2.5642] w-full lg:w-auto lg:min-w-[14.125rem] lg:h-[8.75rem] bg-cover bg-center bg-no-repeat"
        ></div>
        <div className="lg:h-[8.75rem] h-auto overflow-hidden">
          <p className="text-2xl text-white2 lg:pr-4 lg:mt-4">
            {quote?.quote[language]}
          </p>
        </div>
      </div>
      <div className="h-px w-full bg-[#EFEFEF33]"></div>
      <div className="flex items-center gap-6 mt-1">
        <div className="flex items-center gap-3">
          <p className="text-xl">{quote?.comments_count}</p>
          <Comment />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xl">{quote?.likes_count}</p>
          <Heart />
        </div>
      </div>
    </div>
  );
};

export default DesktopQuote;
