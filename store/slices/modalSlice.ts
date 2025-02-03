import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "@/types/modal";
import { RootState } from "@/store/store";

const initialState: ModalState = {
  openedModal: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    updateOpenedModal: (
      state,
      action: PayloadAction<ModalState["openedModal"]>
    ) => {
      state.openedModal = action.payload;
    },
  },
});

export const selectOpenedModal = (state: RootState) => state.modal.openedModal;

export const { updateOpenedModal } = modalSlice.actions;

export default modalSlice.reducer;
