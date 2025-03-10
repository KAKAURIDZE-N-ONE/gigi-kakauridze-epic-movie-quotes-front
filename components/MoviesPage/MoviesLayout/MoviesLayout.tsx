import { Button } from "@/components/Button";
import PlusButton from "@/components/icons/PlusButton";
import React from "react";
import { MovieCard } from "../MovieCard";
import useMoviesLayout from "./useMoviesLayout";
import { updateActiveMovieModal } from "@/store/slices/modalSlice";
import Ghost from "@/components/icons/Ghost";
import Eclipse from "@/components/icons/Eclipse";
import { Search } from "@/components/MoviesPage";

const MoviesLayout: React.FC = () => {
  const {
    movies,
    t,
    dispatch,
    searchValue,
    setSearchValue,
    searchIsOpen,
    setSearchIsOpen,
    isPending,
    isMobile,
  } = useMoviesLayout();

  return (
    <div className="text-white pt-[5.375rem] px-[2.1875rem] lg:pl-0 lg:pr-[4.375rem]">
      <div className="flex flex-col gap-2 ">
        <div className="flex items-center justify-between mt-5 lg:mt-0">
          <h1 className="font-medium text-2xl">
            {t("header")}{" "}
            <span className="hidden lg:inline-block pr-3">
              ({t("total")} {movies?.length})
            </span>
          </h1>
          <div className="flex items-center gap-6">
            {!isMobile && (
              <Search
                searchIsOpen={searchIsOpen}
                setSearchIsOpen={setSearchIsOpen}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
              />
            )}
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
        </div>
        <p className="font-medium lg:hidden">
          ({t("total")} {movies?.length})
        </p>
      </div>
      {isMobile && (
        <div className="mt-5">
          <Search
            searchIsOpen={searchIsOpen}
            setSearchIsOpen={setSearchIsOpen}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />
        </div>
      )}
      {isPending && (
        <div className="flex items-center justify-center w-full mt-28">
          <div className="loader"></div>
        </div>
      )}
      {!isPending && movies?.length === 0 && (
        <div className="flex flex-col gap-8 items-center justify-center mt-20">
          <Ghost />
          <Eclipse />
          <h1 className="text-white font-extrabold text-4xl px-10 text-center leading-[3rem]">
            {t("movies_not_found")}
          </h1>
        </div>
      )}
      {!isPending && (
        <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-14 pb-20 gap-x-7">
          {movies?.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesLayout;
