import React from "react";
import useMovieShortDescription from "./useMovieShortDescription";
import { Props } from "./types";

const MovieShortDescription: React.FC<Props> = ({
  movieShort,
  categories = true,
}) => {
  const { language, isMobile, t } = useMovieShortDescription();
  return (
    <div className="flex bg-black lg:bg-inherit px-3 py-5 lg:px-0 lg:py-0 gap-3 items-center lg:gap-7">
      <div
        style={{
          backgroundImage: `url(${movieShort?.image})`,
        }}
        className="lg:aspect-[1.83] aspect-[1.36] w-2/5 bg-cover bg-no-repeat bg-center rounded-[0.625rem]"
      ></div>
      <div className="w-3/5 flex flex-col gap-2 lg:gap-5">
        <p className="text-skin lg:text-2xl">
          {movieShort?.name[language]} ({movieShort?.year})
        </p>
        {isMobile && (
          <p className="font-bold text-white2 lg:text-lg">
            {t("director")}:{" "}
            <span className="font-medium text-white lg:text-lg">
              {movieShort?.director[language]}
            </span>
          </p>
        )}
        {categories && (
          <div className="-ml-1 -mt-1">
            {movieShort?.categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="inline-block bg-gray rounded-[0.25rem] py-1 px-2 ml-1 mt-1 "
                >
                  <div
                    className="flex items-center justify-center"
                    key={category.id}
                  >
                    <p className="font-bold text-xs lg:text-lg">
                      {category.name[language]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {!isMobile && (
          <p className="font-bold text-white2 lg:text-lg">
            Director:{" "}
            <span className="font-medium text-white lg:text-lg">
              {movieShort?.director[language]}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieShortDescription;
