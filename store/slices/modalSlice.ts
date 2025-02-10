import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "@/types/modal";
import { RootState } from "@/store/store";

const initialState: ModalState = {
  openedModal: null,
  burgerMenuIsOpen: false,
  currentUserNotficationEmail: "",
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
  },
});

export const selectOpenedModal = (state: RootState) => state.modal.openedModal;
export const selectCurrentUserNotficationEmail = (state: RootState) =>
  state.modal.currentUserNotficationEmail;
export const selectBurgerMenuIsOpen = (state: RootState) =>
  state.modal.burgerMenuIsOpen;

export const {
  updateOpenedModal,
  updateCurrentUserNotficationEmail,
  updateBurgerMenuIsOpen,
} = modalSlice.actions;

export default modalSlice.reducer;
