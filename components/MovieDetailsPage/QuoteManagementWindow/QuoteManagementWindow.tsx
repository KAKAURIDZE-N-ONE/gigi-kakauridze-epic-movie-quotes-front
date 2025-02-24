import BigOpenEye from "@/components/icons/BigOpenEye";
import Pencil from "@/components/icons/Pencil";
import Trash from "@/components/icons/Trash";
import React from "react";
import { Props } from "./types";
import useQuoteManagementWindow from "./useQuoteManagementWindow";
import Loader from "@/components/Loader";
import {
  updateActiveModalQuoteId,
  updateActiveQuoteModal,
} from "@/store/slices/modalSlice";

const QuoteManagementWindow: React.FC<Props> = ({ quoteId, movieId }) => {
  const { deleteQuote, deleteQuoteIsPending, dispatch, t } =
    useQuoteManagementWindow({
      movieId,
    });
  return (
    <>
      {deleteQuoteIsPending && <Loader />}
      <div onClick={(e) => e.stopPropagation()} className="relative ">
        <div
          className="absolute bottom-full right-0 lg:bottom-auto lg:top-6 lg:right-auto lg:left-0 bg-normalBlue 
        flex flex-col  rounded-[0.625rem] overflow-hidden z-50"
        >
          <div
            onClick={() => {
              dispatch(updateActiveQuoteModal("view"));
              dispatch(updateActiveModalQuoteId(quoteId));
            }}
            className="flex items-center gap-4 hover:bg-black py-5 pr-14 pl-6 transition-all duration-200"
          >
            <BigOpenEye />
            <p className="text-nowrap">{t("view_quote")}</p>
          </div>
          <div
            onClick={() => {
              dispatch(updateActiveQuoteModal("edit"));
              dispatch(updateActiveModalQuoteId(quoteId));
            }}
            className="flex items-center gap-4 hover:bg-black py-5 pr-14 pl-6 transition-all duration-200"
          >
            <Pencil />
            <p className="text-nowrap">{t("edit")}</p>
          </div>
          {quoteId && (
            <div
              onClick={() => {
                deleteQuote({ quoteId });
              }}
              className="flex items-center gap-4 hover:bg-black py-5 pr-14 pl-6 transition-all duration-200"
            >
              <Trash />
              <p className="text-nowrap">{t("delete")}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QuoteManagementWindow;
