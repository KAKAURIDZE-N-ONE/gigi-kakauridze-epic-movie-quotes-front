import { NewsFeedState } from "@/types/slices";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LikeBroadcastResponse } from "@/types/respones";

const initialState: NewsFeedState = {
  posts: [],
  page: 1,
  searchIsOpen: false,
};

const newsFeedSlice = createSlice({
  name: "newsFeed",
  initialState,
  reducers: {
    pushNextPagePosts(state, action: PayloadAction<NewsFeedState["posts"]>) {
      state.posts = [...state.posts, ...action.payload];
    },
    updatePage(state) {
      state.page += 1;
    },
    resetPage(state) {
      state.page = 1;
    },
    resetPosts(state) {
      state.posts = [];
    },
    addNewCommentOnPost(state, action) {
      const { postId, comment } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (!post) return;
      post.comments.push(comment);
    },
    addNewLikeOnPost(state, action) {
      const post = state.posts.find(
        (post) => post.id === action.payload.like.post_id
      );
      if (!post) return;
      post.likes_count += 1;
    },
    removeNewLikeOnPost(state, action) {
      const post = state.posts.find(
        (post) => post.id === action.payload.like.post_id
      );
      if (!post) return;
      post.likes_count -= 1;
    },
    updateUserLike(state, action: PayloadAction<LikeBroadcastResponse>) {
      const post = state.posts.find(
        (post) => post.id === action.payload.like.post_id
      );
      if (post)
        post.current_user_like = {
          id: action.payload.like.id,
          active: action.payload.like.active,
        };
    },
    updateSearchIsOpen(state, action: PayloadAction<boolean>) {
      state.searchIsOpen = action.payload;
    },
  },
});

export const selectPosts = (state: RootState) => state.newsFeed.posts;
export const selectPage = (state: RootState) => state.newsFeed.page;
export const selectSearchIsOpen = (state: RootState) =>
  state.newsFeed.searchIsOpen;

export const {
  pushNextPagePosts,
  addNewCommentOnPost,
  resetPosts,
  updatePage,
  resetPage,
  addNewLikeOnPost,
  removeNewLikeOnPost,
  updateUserLike,
  updateSearchIsOpen,
} = newsFeedSlice.actions;

export default newsFeedSlice.reducer;
