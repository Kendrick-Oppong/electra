// modalNewsLetterSlice.js

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ModalNewsletterState {
  showNewsletter: boolean;
}

const initialState: ModalNewsletterState = {
  showNewsletter:
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("showNewsletter") ?? "true"),
};

const modalNewsLetterSlice = createSlice({
  name: "modalNewsletter",
  initialState,
  reducers: {
    removeModalNewsletter: (state) => {
      state.showNewsletter = false;
      localStorage.setItem("showNewsletter", JSON.stringify(false));
    },
  },
});

export const { removeModalNewsletter } = modalNewsLetterSlice.actions;

export const getModalNewsletterState = (state: RootState) =>
  state.modalNewsletter.showNewsletter;

export default modalNewsLetterSlice.reducer;
