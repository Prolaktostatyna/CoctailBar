import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coctailApi = createApi({
  reducerPath: "coctailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    getCoctailbyName: builder.query({
      query: (coctailName) => `search.php?s=${coctailName}`,
    }),
  }),
});

export const { useGetCoctailbyNameQuery } = coctailApi;
