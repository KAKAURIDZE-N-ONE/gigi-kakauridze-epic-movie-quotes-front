import { QUOTES } from "@/config/queryKeys";
import useListenCommentAdd from "@/hooks/useListenCommentAdd";
import { getQuotes } from "@/services/apiQuote";
import {
  addNewCommentOnPost,
  selectPage,
  selectPosts,
  pushNextPagePosts,
  resetPosts,
  updatePage,
} from "@/store/slices/newsFeedSlice";
import { useAppSelector } from "@/store/store";
import { PostsListingResponse } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function useNewsFeedLayout() {
  const {
    t,
    i18n: { language },
  } = useTranslation("news-feed-page");
  const searchRef = useRef<HTMLInputElement | null>(null);
  const posts = useAppSelector(selectPosts);
  const page = useAppSelector(selectPage);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchIsActive, setSearchIsActive] = useState<boolean>(false);
  const dispatch = useDispatch();

  const { data, isPending } = useQuery<PostsListingResponse[]>({
    queryKey: [QUOTES, page],
    queryFn: () => getQuotes(page),
    refetchOnWindowFocus: false,
  });

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (isPending) return;

      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 200
      ) {
        dispatch(updatePage());
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, isPending]);

  useEffect(() => {
    if (data) {
      if (page === 1) dispatch(resetPosts());
      dispatch(pushNextPagePosts(data));
    }
  }, [data, dispatch, page]);

  const newComment = useListenCommentAdd();

  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    if (newComment !== null) {
      dispatch(addNewCommentOnPost(newComment));
    }
  }, [newComment, stableDispatch]);

  useEffect(() => {
    if (searchRef && searchIsActive) {
      searchRef.current?.focus();
    }
  }, [searchRef, searchIsActive]);

  return {
    dispatch,
    posts,
    searchIsActive,
    setSearchIsActive,
    searchValue,
    setSearchValue,
    searchRef,
    t,
    language,
  };
}
