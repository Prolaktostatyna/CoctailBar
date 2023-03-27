import { configureStore } from "@reduxjs/toolkit";
import { coctailApi } from "../features/api/apiSlice";
import searchCoctailReducer from "../features/coctail/Nav/Search/SearchSlice";

export const store = configureStore({
  reducer: {
    [coctailApi.reducerPath]: coctailApi.reducer,
    searchCoctail: searchCoctailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coctailApi.middleware),
});
