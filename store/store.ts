import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import modalReducer from "./slices/modalSlice";
import newsFeedReducer from "./slices/newsFeedSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    newsFeed: newsFeedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
