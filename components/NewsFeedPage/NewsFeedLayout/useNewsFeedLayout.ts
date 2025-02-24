import { QUOTES } from "@/config/queryKeys";
import { getQuotes } from "@/services/apiQuote";
import {
  addNewCommentOnPost,
  selectPage,
  selectPosts,
  setPosts,
} from "@/store/slices/newsFeedSlice";
import { useAppSelector } from "@/store/store";
import { PostsListingResponse, RealTimeComment } from "@/types/respones";
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

  useEffect(() => {
    if (searchRef && searchIsActive) {
      searchRef.current?.focus();
    }
  }, [searchRef, searchIsActive]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Echo) {
      const channel = window.Echo.channel("comments");

      channel.listen("CommentAdded", (event: RealTimeComment) => {
        const postId = event?.comment?.quote?.id;
        const newComment = {
          id: event.comment.id,
          comment: event.comment.comment,
          user: {
            avatar: event?.comment.user?.avatar,
            name: event?.comment.user?.name,
          },
        };
        dispatch(addNewCommentOnPost({ postId, comment: newComment }));
      });

      return () => {
        channel.stopListening("CommentAdded");
      };
    }
  }, [dispatch]);

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
