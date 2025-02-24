import { NewsFeedState } from "@/types/slices";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: NewsFeedState = {
  posts: [],
  page: 1,
};

const newsFeedSlice = createSlice({
  name: "newsFeed",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    nextPage(state, action) {
      state.page = action.payload;
    },
    addNewCommentOnPost(state, action) {
      const { postId, comment } = action.payload;
      console.log(postId, comment);
      const post = state.posts.find((post) => post.id === postId);
      post?.comments.push(comment);
    },
  },
});

export const selectPosts = (state: RootState) => state.newsFeed.posts;
export const selectPage = (state: RootState) => state.newsFeed.page;

export const { setPosts, addNewCommentOnPost } = newsFeedSlice.actions;

export default newsFeedSlice.reducer;
