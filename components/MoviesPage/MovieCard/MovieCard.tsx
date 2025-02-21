import Quote from "@/components/icons/Quote";
import React from "react";
import { Props } from "./types";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const MovieCard: React.FC<Props> = ({ movie }) => {
  const { i18n } = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <Link
        href={`/movies/${movie?.id}`}
        style={{
          aspectRatio: 1.1854,
          backgroundImage: `url(${movie?.image})`,
        }}
        className="bg-no-repeat bg-center bg-cover rounded-xl cursor-pointer"
      ></Link>
      <div>
        <h2 className="font-medium text-2xl cursor-pointer">
          {movie.name[i18n.language]} ({movie.year})
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-xl font-medium">{movie.quotes_count}</p>
        <Quote />
      </div>
    </div>
  );
};

export default MovieCard;
