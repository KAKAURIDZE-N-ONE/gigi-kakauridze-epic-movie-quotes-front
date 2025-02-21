import BigOpenEye from "@/svgs/BigOpenEye";
import Pencil from "@/svgs/Pencil";
import Trash from "@/svgs/Trash";
import React from "react";
import { Props } from "./types";
import useQuoteManagementWindow from "./useQuoteManagementWindow";
import Loader from "@/components/Loader";
import Link from "next/link";

const QuoteManagementWindow: React.FC<Props> = ({ quoteId, movieId }) => {
  const { deleteQuote, deleteQuoteIsPending } = useQuoteManagementWindow({
    movieId,
  });
  return (
    <>
      {deleteQuoteIsPending && <Loader />}
      <div onClick={(e) => e.stopPropagation()} className="relative ">
        <div
          className="absolute bottom-full right-0 lg:bottom-auto lg:top-6 lg:right-auto lg:left-0 bg-normalBlue 
        flex flex-col  rounded-[0.625rem] overflow-hidden"
        >
          <Link
            href={`/movies/${movieId}/quote/${quoteId}`}
            className="flex items-center gap-4 hover:bg-black py-5 pr-14 pl-6 transition-all duration-200"
          >
            <BigOpenEye />
            <p className="text-nowrap">View Quote</p>
          </Link>
          <Link
            href={`/movies/${movieId}/quote/${quoteId}/edit`}
            className="flex items-center gap-4 hover:bg-black py-5 pr-14 pl-6 transition-all duration-200"
          >
            <Pencil />
            <p className="text-nowrap">Edit</p>
          </Link>
          {quoteId && (
            <div
              onClick={() => {
                deleteQuote({ quoteId });
              }}
              className="flex items-center gap-4 hover:bg-black py-5 pr-14 pl-6 transition-all duration-200"
            >
              <Trash />
              <p className="text-nowrap">Delete</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QuoteManagementWindow;
