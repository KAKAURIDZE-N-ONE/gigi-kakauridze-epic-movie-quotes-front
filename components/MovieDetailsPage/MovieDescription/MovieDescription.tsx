import React from "react";
import useMovieDescription from "./useMovieDescription";
import Pencil from "@/svgs/Pencil";
import Trash from "@/svgs/Trash";

const MovieDescription: React.FC = () => {
  const { movie, language } = useMovieDescription();
  return (
    <div className="text-white w-full bg-red h-full">
      <h1 className="text-2xl font-medium">Movie description</h1>
      <div className="flex w-full">
        <div></div>
        {movie && (
          <div className="flex flex-col">
            <div className="flex items-center justify-between w-full ">
              <h2 className="text-skin text-2xl font-medium">
                {JSON.parse(movie?.name)[language]} ({movie?.year})
              </h2>
              <div className="flex items-center justify-between bg-normalBlue px-6 py-2 rounded-[0.625rem] h-[2.5rem] w-36">
                <Pencil />
                <div className="h-full w-px bg-gray"></div>
                <Trash />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDescription;
