import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InitialStateProps {
  isExpanded: boolean;
}

const initialState: InitialStateProps = {
  isExpanded: false,
};

const searchToggleSlice = createSlice({
  name: "searchToggle",
  initialState,
  reducers: {
    toggleSearch: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    setSearchExpanded: (state, action) => {
      state.isExpanded = action.payload;
    },
  },
});

export const { toggleSearch, setSearchExpanded } = searchToggleSlice.actions;
export const getSearchToggleState = (state: RootState) =>
  state.searchToggle.isExpanded;
export default searchToggleSlice.reducer;
