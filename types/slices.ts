import { PostsListingResponse } from "./respones";

export type ModalState = {
  burgerMenuIsOpen: boolean;
  openedModal:
    | "signUp"
    | "logIn"
    | "forgotPassword"
    | "resetPassword"
    | "verifyEmail"
    | "verifySuccess"
    | "resetPasswordSuccess"
    | "resetPasswordLink"
    | "makeChangesUsername"
    | "makeChangesPassword"
    | null;
  currentUserNotficationEmail: string;
  activeQuoteModal: "add" | "edit" | "view" | "createPost" | null;
  activeModalQuoteId: number | null;
  activeMovieModal: "add" | "edit" | null;
};

export type NewsFeedState = {
  posts: PostsListingResponse["data"];
  page: number;
  searchIsOpen: boolean;
};
