import { QUOTES } from "@/config/queryKeys";
import { useAuthentication } from "@/hooks/useAuthentication";
import useListenCommentAdd from "@/hooks/useListenCommentAdd";
import useListenLike from "@/hooks/useListenLike";
import { getQuotes } from "@/services/apiQuote";
import {
  addNewCommentOnPost,
  selectPage,
  selectPosts,
  pushNextPagePosts,
  resetPosts,
  updatePage,
  addNewLikeOnPost,
  removeNewLikeOnPost,
  updateUserLike,
  resetPage,
  selectSearchIsOpen,
} from "@/store/slices/newsFeedSlice";
import { useAppSelector } from "@/store/store";
import { NewsFeedFilter } from "@/types/requests";
import { PostsListingResponse } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

export default function useNewsFeedLayout() {
  const {
    t,
    i18n: { language },
  } = useTranslation("news-feed-page");
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const [searchValidationError, setSearchValidationError] =
    useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const posts = useAppSelector(selectPosts);
  const page = useAppSelector(selectPage);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filter, setFilter] = useState<NewsFeedFilter>(null);
  const searchIsOpen = useAppSelector(selectSearchIsOpen);
  const { user } = useAuthentication();
  const dispatch = useDispatch();

  const { data, isPending } = useQuery<PostsListingResponse>({
    queryKey: [QUOTES, page, filter?.filterBy, filter?.value],
    queryFn: () => getQuotes({ page, filter }),
    refetchOnWindowFocus: false,
  });

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (isPending) return;

      if (
        window.innerHeight + window.scrollY >=
          document.body.scrollHeight - 200 &&
        data?.has_more_pages
      ) {
        dispatch(updatePage());
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, isPending, data]);

  useEffect(() => {
    if (data) {
      if (page === 1) dispatch(resetPosts());
      dispatch(pushNextPagePosts(data.data));
    }
  }, [data, dispatch, page]);

  const newComment = useListenCommentAdd();

  const { addLike, removeLike } = useListenLike();

  useEffect(() => {
    if (newComment !== null) {
      dispatch(addNewCommentOnPost(newComment));
    }
  }, [newComment, dispatch]);

  useEffect(() => {
    if (addLike) {
      if (user?.id !== addLike.like.user_id) {
        dispatch(addNewLikeOnPost(addLike));
      }
      if (user?.id === addLike.like.user_id) {
        dispatch(updateUserLike(addLike));
      }
    }
  }, [addLike, dispatch, user?.id]);

  useEffect(() => {
    if (removeLike) {
      if (user?.id !== removeLike.like.user_id) {
        dispatch(removeNewLikeOnPost(removeLike));
      }
      if (user?.id === removeLike.like.user_id) {
        dispatch(updateUserLike(removeLike));
      }
    }
  }, [removeLike, dispatch, user?.id]);

  useEffect(() => {
    if (searchRef && searchIsOpen) {
      searchRef.current?.focus();
    }
  }, [searchRef, searchIsOpen]);

  useEffect(() => {
    if (searchValue) {
      if (!searchValue.startsWith("#") && !searchValue.startsWith("@")) {
        setSearchValidationError(true);
      } else {
        setSearchValidationError(false);
        setFilter(null);
        window.scrollTo({ top: 0 });
        if (page > 1) {
          dispatch(resetPosts());
          dispatch(resetPage());
        }
      }
    } else {
      setSearchValidationError(false);
      setFilter(null);
      window.scrollTo({ top: 0 });
      if (page > 1) {
        dispatch(resetPosts());
        dispatch(resetPage());
      }
    }
  }, [searchValue, dispatch, page]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (searchValue && searchValue.length > 1 && !searchValidationError) {
        const filterBy = searchValue.startsWith("@")
          ? "movieName"
          : "quoteText";
        const value = searchValue.slice(1);
        dispatch(resetPage());

        setFilter({ filterBy, value });
      }
    }, 600);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchValue, searchValidationError, dispatch]);

  useEffect(() => {
    dispatch(resetPage());
  }, [filter?.value, filter?.filterBy, dispatch]);

  useEffect(() => {
    if (!searchIsOpen) {
      setFilter(null);
      setSearchValue("");
    }
  }, [searchIsOpen]);

  return {
    dispatch,
    posts,
    searchIsOpen,
    searchValue,
    setSearchValue,
    searchRef,
    t,
    language,
    searchValidationError,
    isPending,
    isMobile,
    page,
  };
}
