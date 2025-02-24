import { Button } from "@/components/Button";
import PlusButton from "@/components/icons/PlusButton";
import React from "react";
import { Props } from "./types";
import { Quote } from "@/components/MovieDetailsPage";
import { updateActiveQuoteModal } from "@/store/slices/modalSlice";
import useMovieQuotes from "./useMovieQuotes";

const MovieQuotes: React.FC<Props> = ({ quotes, movieId }) => {
  const { dispatch, t } = useMovieQuotes();

  return (
    <div className="flex flex-col gap-5 w-full">
      <div>
        <div className="block lg:hidden px-[2.1875rem] mt-3">
          <h2 className="text-2xl">{t("all_quotes")}</h2>
          <p>
            ({t("total")} {quotes?.length})
          </p>
        </div>
        <div className="items-center gap-5 hidden lg:flex">
          <h2 className="text-2xl ">
            {t("quotes")} ({t("total")} {quotes?.length})
          </h2>
          <div className="h-8 w-px border-l border-l-gray"></div>
          <Button
            clickFn={() => dispatch(updateActiveQuoteModal("add"))}
            size="medium"
            icon={<PlusButton />}
            color="red"
          >
            {t("add_quote")}
          </Button>
        </div>
      </div>
      <div className="mt-4 lg:mt-9 flex flex-col gap-4 pb-10">
        {quotes?.map((quote) => {
          return <Quote movieId={movieId} key={quote.id} quote={quote} />;
        })}
      </div>
    </div>
  );
};

export default MovieQuotes;
