import { Button } from "@/components/Button";
import PlusButton from "@/components/icons/PlusButton";
import React from "react";
import { MovieCard } from "../MovieCard";
import useMoviesLayout from "./useMoviesLayout";
import { updateActiveMovieModal } from "@/store/slices/modalSlice";

const MoviesLayout: React.FC = () => {
  const { movies, t, dispatch } = useMoviesLayout();

  return (
    <div className="text-white px-[2.1875rem] lg:pl-0 lg:pr-[4.375rem]">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between mt-5 lg:mt-0">
          <h1 className="font-medium text-2xl">
            {t("header")}{" "}
            <span className="hidden lg:inline-block pr-3">
              ({t("total")} {movies?.length})
            </span>
          </h1>
          <div className="lg:hidden ">
            <Button
              icon={<PlusButton />}
              clickFn={() => {
                dispatch(updateActiveMovieModal("add"));
              }}
              color="red"
              size="smallest"
            >
              {t("add_movie")}
            </Button>
          </div>
          <div className="hidden lg:inline-block text-nowrap">
            <Button
              icon={<PlusButton />}
              clickFn={() => {
                dispatch(updateActiveMovieModal("add"));
              }}
              color="red"
              size="medium"
            >
              {t("add_movie")}
            </Button>
          </div>
        </div>
        <p className="font-medium lg:hidden">
          ({t("total")} {movies?.length})
        </p>
      </div>
      <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-14 pb-20 gap-x-7">
        {movies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesLayout;
