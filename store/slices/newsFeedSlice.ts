import { NewsFeedState } from "@/types/slices";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: NewsFeedState = {
  posts: [],
  page: 1,
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
      state.page = 0;
    },
    resetPosts(state) {
      state.posts = [];
    },
    addNewCommentOnPost(state, action) {
      const { postId, comment } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      post?.comments.push(comment);
    },
  },
});

export const selectPosts = (state: RootState) => state.newsFeed.posts;
export const selectPage = (state: RootState) => state.newsFeed.page;

export const {
  pushNextPagePosts,
  addNewCommentOnPost,
  resetPosts,
  updatePage,
  resetPage,
} = newsFeedSlice.actions;

export default newsFeedSlice.reducer;
