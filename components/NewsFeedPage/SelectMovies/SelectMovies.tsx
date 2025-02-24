import { MovieShortDescription } from "@/components/MovieShortDescription";
import { Props } from "./types";
import { useState } from "react";
import Camera from "@/components/icons/Camera";
import LanguageArrow from "@/components/icons/LanguageArrow";
import XIcon from "@/components/icons/XIcon";

const SelectMovies: React.FC<Props> = ({
  movies,
  setChoosedMovieId,
  choosedMovieId,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      {!choosedMovieId && (
        <div
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="h-[5.375rem] bg-black w-full flex items-center justify-between px-4 lg:px-6 cursor-pointer"
        >
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="hidden lg:block">
              <Camera size="big" isActive={false} />
            </div>
            <div className="lg:hidden">
              <Camera isActive={false} />
            </div>
            <p className="lg:text-2xl">Choose movie</p>
          </div>
          <div className={`${isOpen ? "rotate-180" : ""}`}>
            <LanguageArrow size="big" />
          </div>
        </div>
      )}

      {choosedMovieId && (
        <div className="relative">
          <div
            onClick={() => setChoosedMovieId(undefined)}
            className="absolute top-3 right-3 cursor-pointer"
          >
            <XIcon />
          </div>
          <MovieShortDescription
            categories={false}
            movieShort={movies.find((movie) => movie.id === choosedMovieId)}
          />
        </div>
      )}

      {isOpen && (
        <div className="flex flex-col gap-3 lg:gap-4 h-[20rem] overflow-auto mt-4">
          {movies?.map((movie) => {
            return (
              <div
                onClick={() => {
                  setChoosedMovieId(movie.id);
                  setIsOpen(false);
                }}
                className=" rounded-[0.625rem] cursor-pointer"
                key={movie.id}
              >
                <MovieShortDescription categories={false} movieShort={movie} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectMovies;
