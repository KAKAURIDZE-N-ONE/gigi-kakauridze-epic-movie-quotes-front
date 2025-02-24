import { MovieShortResponse } from "@/types/respones";

export type Props = {
  movies: MovieShortResponse[];
  choosedMovieId: number | undefined;
  setChoosedMovieId: React.Dispatch<React.SetStateAction<number | undefined>>;
};
