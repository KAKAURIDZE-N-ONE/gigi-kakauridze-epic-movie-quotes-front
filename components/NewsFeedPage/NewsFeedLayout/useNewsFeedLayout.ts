import { QUOTES } from "@/config/queryKeys";
import useListenCommentAdd from "@/hooks/useListenCommentAdd";
import { getQuotes } from "@/services/apiQuote";
import {
  addNewCommentOnPost,
  selectPage,
  selectPosts,
  setPosts,
} from "@/store/slices/newsFeedSlice";
import { useAppSelector } from "@/store/store";
import { PostsListingResponse } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
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

  const { data } = useQuery<PostsListingResponse[]>({
    queryKey: [QUOTES],
    queryFn: () => getQuotes(page),
  });

  const newComment = useListenCommentAdd();

  useEffect(() => {
    if (newComment) {
      dispatch(addNewCommentOnPost(newComment));
    }
  }, [newComment, dispatch]);

  useEffect(() => {
    if (searchRef && searchIsActive) {
      searchRef.current?.focus();
    }
  }, [searchRef, searchIsActive]);

  useEffect(() => {
    dispatch(setPosts(data));
  }, [data, dispatch]);

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
