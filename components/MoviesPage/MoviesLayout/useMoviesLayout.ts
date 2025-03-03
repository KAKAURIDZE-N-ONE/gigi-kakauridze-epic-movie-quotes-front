import { MOVIES } from "@/config/queryKeys";
import { getMovies } from "@/services/apiMovie";
import { MoviesResponse } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

export default function useMoviesLayout() {
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const { t } = useTranslation("movies-page");
  const dispatch = useDispatch();

  const { data: movies, isPending } = useQuery<MoviesResponse[]>({
    queryKey: [MOVIES, filter],
    queryFn: () => getMovies(filter),
    staleTime: 0,
  });

  useEffect(() => {
    const filterTimeout = setTimeout(() => {
      setFilter(searchValue);
    }, 600);

    return () => {
      clearTimeout(filterTimeout);
    };
  }, [searchValue]);

  return {
    movies,
    t,
    dispatch,
    searchValue,
    setSearchValue,
    searchIsOpen,
    setSearchIsOpen,
    isPending,
    isMobile,
  };
}
