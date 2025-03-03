import { MovieShortDescription } from "@/components/MovieShortDescription";
import { Props } from "./types";
import Camera from "@/components/icons/Camera";
import LanguageArrow from "@/components/icons/LanguageArrow";
import XIcon from "@/components/icons/XIcon";
import useSelectMovies from "./useSelectMovies";

const SelectMovies: React.FC<Props> = ({
  movies,
  setChoosedMovieId,
  choosedMovieId,
}) => {
  const { isOpen, setIsOpen, t } = useSelectMovies();

  return (
    <div>
      {!choosedMovieId && (
        <div
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="h-[5.375rem] bg-black w-full flex items-center justify-between px-4 lg:px-6 cursor-pointer"
        >
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="hidden lg:block">
              <Camera className="w-8 h-8" isActive={false} />
            </div>
            <div className="lg:hidden">
              <Camera className="w-6 h-6" isActive={false} />
            </div>
            <p className="lg:text-2xl">{t("select_label")}</p>
          </div>
          <div className={`${isOpen ? "rotate-180" : ""}`}>
            <LanguageArrow className="w-5 h-5" />
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
        <>
          {movies?.length === 0 && (
            <h1 className="text-lg text-center mt-3 text-red">
              {t("select_error")}
            </h1>
          )}
          {movies?.length > 0 && (
            <div className="flex flex-col gap-3 lg:gap-4 მახ-h-[20rem] overflow-auto mt-4">
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
                    <MovieShortDescription
                      categories={false}
                      movieShort={movie}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SelectMovies;
