import React from "react";
import useMovieDescription from "./useMovieDescription";
import Pencil from "@/svgs/Pencil";
import Trash from "@/svgs/Trash";
import { MovieQuotes } from "../MovieQuotes";
import { Button } from "@/components/Button";
import PlusButton from "@/svgs/PlusButton";

const MovieDescription: React.FC = () => {
  const { movie, language, router } = useMovieDescription();

  return (
    <div className="text-white w-full  h-full lg:pr-[4.375rem]">
      <h1 className="text-2xl font-medium hidden lg:inline-block">
        Movie description
      </h1>
      <div className=" flex flex-col lg:flex-row w-full gap-5 mt-9 lg:mt-7 ">
        <div className="w-full lg:w-[55%] px-[2.1875rem] lg:px-0">
          <div
            style={{
              backgroundImage: `url(${movie?.image})`,
            }}
            className="aspect-[1.1854] lg:aspect-[1.8344] bg-center rounded-xl bg-no-repeat bg-cover w-full"
          ></div>
          <div className="mt-9 hidden lg:block">
            <MovieQuotes quotes={movie?.quotes} />
          </div>
        </div>
        <div className="w-full lg:w-[45%] px-[2.1875rem] lg:px-0">
          {movie && (
            <div className="flex flex-col w-full sticky top-28">
              <div className="flex items-center justify-between w-full ">
                <h2 className="text-skin text-2xl font-medium">
                  {movie.name[language]}
                </h2>
                <div className="hidden lg:flex items-center justify-between bg-normalBlue px-6 py-2 rounded-[0.625rem] h-[2.5rem] w-36">
                  <Pencil />
                  <div className="h-full w-px bg-gray"></div>
                  <Trash />
                </div>
              </div>
              <div className="mt-5 -ml-1">
                {movie?.categories?.map((category, i) => {
                  return (
                    <div
                      className="font-bold text-lg bg-gray rounded-[0.25rem] px-3 py-1 inline-block mx-1 my-1"
                      key={category.id}
                    >
                      {category.name[language]}
                    </div>
                  );
                })}
              </div>
              <p className="mt-4">
                <span className="font-bold text-white2 text-lg">Director:</span>
                <span className="font-medium text-lg ml-4">
                  {movie.director[language]}
                </span>
              </p>
              <div className="text-lg text-white2 mt-5">
                {movie.description[language]}
              </div>
              <div className="lg:hidden mt-5">
                <Button
                  size="smallest"
                  icon={<PlusButton />}
                  color="red"
                  clickFn={() => router.push(`/movies/${movie.id}/quote`)}
                >
                  Add quote
                </Button>
              </div>
              <div className="lg:hidden border-b border-b-[#54535A] mt-6"></div>
            </div>
          )}
        </div>
        <div className="lg:hidden">
          <MovieQuotes quotes={movie?.quotes} />
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
