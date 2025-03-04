import { MovieShortResponse } from "@/types/respones";
import { Dispatch, SetStateAction } from "react";

export type Props = {
  movies: MovieShortResponse[];
  choosedMovieId: number | undefined;
  setChoosedMovieId: React.Dispatch<React.SetStateAction<number | undefined>>;
  error: boolean;
  isSubmitted: boolean;
  setCustomSelectError: Dispatch<SetStateAction<boolean>>;
};
