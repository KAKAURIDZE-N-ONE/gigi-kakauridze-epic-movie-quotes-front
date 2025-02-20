import { Button } from "@/components/Button";
import PlusButton from "@/svgs/PlusButton";
import React from "react";
import { Props } from "./types";
import { Quote } from "@/components/MovieDetailsPage";
import { useRouter } from "next/router";

const MovieQuotes: React.FC<Props> = ({ quotes, movieId }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5 w-full">
      <div>
        <div className="block lg:hidden px-[2.1875rem] mt-3">
          <h2 className="text-2xl">All Quotes</h2>
          <p>(Total {quotes?.length})</p>
        </div>
        <div className="items-center gap-5 hidden lg:flex">
          <h2 className="text-2xl ">Quotes (Total {quotes?.length})</h2>
          <div className="h-8 w-px border-l border-l-gray"></div>
          <Button
            clickFn={() => router.push(`/movies/${movieId}/quote`)}
            size="medium"
            icon={<PlusButton />}
            color="red"
          >
            Add quote
          </Button>
        </div>
      </div>
      <div className="mt-4 lg:mt-9 flex flex-col gap-4 pb-10">
        {quotes?.map((quote) => {
          return <Quote key={quote.id} quote={quote} />;
        })}
      </div>
    </div>
  );
};

export default MovieQuotes;
