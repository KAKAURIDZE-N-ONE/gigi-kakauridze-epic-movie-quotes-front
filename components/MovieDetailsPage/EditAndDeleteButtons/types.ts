export type Props = {
  movieId: number;
  handleDeleteMovie: (movieId: number) => void;
  deleteMovieIsPending: boolean;
};
