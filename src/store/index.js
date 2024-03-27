import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "Api/apiSlice";
import { cocktailApiSlice } from "Api/cocktail/cocktailApiSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      cocktailApiSlice.middleware
    ),
});
