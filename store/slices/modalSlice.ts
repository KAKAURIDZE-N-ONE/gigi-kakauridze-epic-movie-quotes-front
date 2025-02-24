import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "@/types/slices";
import { RootState } from "@/store/store";

const initialState: ModalState = {
  openedModal: null,
  burgerMenuIsOpen: false,
  currentUserNotficationEmail: "",
  activeQuoteModal: null,
  activeModalQuoteId: null,
  activeMovieModal: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    updateBurgerMenuIsOpen(state, action) {
      state.burgerMenuIsOpen = action.payload;
    },
    updateOpenedModal: (
      state,
      action: PayloadAction<ModalState["openedModal"]>
    ) => {
      state.openedModal = action.payload;
    },
    updateCurrentUserNotficationEmail(state, action) {
      state.currentUserNotficationEmail = action.payload;
    },
    updateActiveQuoteModal(
      state,
      action: PayloadAction<ModalState["activeQuoteModal"]>
    ) {
      state.activeQuoteModal = action.payload;
    },
    updateActiveMovieModal(
      state,
      action: PayloadAction<ModalState["activeMovieModal"]>
    ) {
      state.activeMovieModal = action.payload;
    },
    updateActiveModalQuoteId(state, action) {
      state.activeModalQuoteId = action.payload;
    },
  },
});

export const selectActiveMovieModal = (state: RootState) =>
  state.modal.activeMovieModal;
export const selectActiveModalQuoteId = (state: RootState) =>
  state.modal.activeModalQuoteId;
export const selectActiveQuoteModal = (state: RootState) =>
  state.modal.activeQuoteModal;
export const selectOpenedModal = (state: RootState) => state.modal.openedModal;
export const selectCurrentUserNotficationEmail = (state: RootState) =>
  state.modal.currentUserNotficationEmail;
export const selectBurgerMenuIsOpen = (state: RootState) =>
  state.modal.burgerMenuIsOpen;

export const {
  updateOpenedModal,
  updateCurrentUserNotficationEmail,
  updateBurgerMenuIsOpen,
  updateActiveQuoteModal,
  updateActiveMovieModal,
  updateActiveModalQuoteId,
} = modalSlice.actions;

export default modalSlice.reducer;
