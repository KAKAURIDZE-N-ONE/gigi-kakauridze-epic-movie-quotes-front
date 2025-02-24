import React from "react";
import { Props } from "./types";
import Comment from "@/components/icons/Comment";
import Heart from "@/components/icons/Heart";
import ThreeDots from "@/components/icons/ThreeDots";
import useQuote from "./useQuote";
import { QuoteManagementWindow } from "../QuoteManagementWindow";

const Quote: React.FC<Props> = ({ quote, movieId }) => {
  const {
    language,
    windowRef,
    windowIsOpen,
    setWindowIsOpen,
    quoteRef,
    quoteHeight,
  } = useQuote();

  return (
    <div className="bg-darkerBlue py-6  px-[2.1875rem] relative lg:rounded-[0.625rem] flex flex-col gap-4 ">
      <div className="flex flex-col lg:flex-row gap-10">
        <div
          ref={windowRef}
          onClick={() => {
            setWindowIsOpen((isOpen) => !isOpen);
          }}
          className="absolute cursor-pointer px-3 py-1 lg:px-0  bottom-6 right-6 lg:right-7 lg:top-4 z-[60]"
        >
          {windowIsOpen && (
            <QuoteManagementWindow movieId={movieId} quoteId={quote?.id} />
          )}
          <ThreeDots />
        </div>
        <div
          style={{
            backgroundImage: `url(${quote?.image})`,
          }}
          className="aspect-[2.5642] w-full lg:w-auto lg:min-w-[14.125rem] lg:max-w-[14.125rem] lg:h-[8.75rem] bg-cover bg-center bg-no-repeat"
        ></div>
        <div className="relative overflow-hidden">
          <div className={`lg:h-[9rem] overflow-hidden`}>
            <p className="text-2xl text-white2 lg:pr-4 lg:mt-4">
              {quote?.quote[language]}
            </p>
            <div className="absolute bottom-0 right-0 w-full bg-darkerBlue text-2xl">
              {quoteHeight > 140 ? "..." : ""}
            </div>
          </div>
          <div className={`overflow-hidden`}>
            <p
              ref={quoteRef}
              className="text-2xl text-white2 lg:pr-4 lg:mt-4 absolute left-0 top-0 opacity-0"
            >
              {quote?.quote[language]}
            </p>
          </div>
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

export default Quote;
