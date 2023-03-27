import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedCoctail: "",
  inputValidator: false,
};
const reducers = {
  search: (state, action) => {
    state.searchedCoctail = action.payload;
  },
  validator: (state, action) => {
    state.inputValidator = action.payload;
  },
};

export const searchSlice = createSlice({
  name: "searchCoctail",
  initialState,
  reducers,
});

export const { search, validator } = searchSlice.actions;

export const selectSearchCoctail = (state) =>
  state.searchCoctail.searchedCoctail;

export const selectInputValidator = (state) =>
  state.searchCoctail.inputValidator;

export default searchSlice.reducer;
