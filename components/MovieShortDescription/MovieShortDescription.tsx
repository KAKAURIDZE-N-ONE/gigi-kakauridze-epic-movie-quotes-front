import React from "react";
import useMovieShortDescription from "./useMovieShortDescription";
import { Props } from "./types";

const MovieShortDescription: React.FC<Props> = ({ movieShort }) => {
  const { language } = useMovieShortDescription();
  return (
    <div className="flex bg-black px-3 py-5 gap-3">
      <div
        style={{
          backgroundImage: `url(${movieShort?.image})`,
        }}
        className="aspect-[1.36] w-2/5 bg-cover bg-no-repeat bg-center rounded-[0.625rem]"
      ></div>
      <div className="w-3/5 flex flex-col gap-2">
        <p className="text-skin">
          {movieShort?.name[language]} ({movieShort?.year})
        </p>
        <p className="font-bold text-white2">
          Director:{" "}
          <span className="font-medium text-white">
            {movieShort?.director[language]}
          </span>
        </p>
        <div className="">
          {movieShort?.categories.map((category) => {
            return (
              <div
                key={category.id}
                className="inline-block bg-gray rounded-[0.25rem] py-1 px-2"
              >
                <div
                  className="flex items-center justify-center"
                  key={category.id}
                >
                  <p className="font-bold text-xs">{category.name[language]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieShortDescription;
