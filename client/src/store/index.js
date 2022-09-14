import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import wordsApi from "./api/wordsApi";

const store = configureStore({
  reducer: {
    [wordsApi.reducerPath]: wordsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wordsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
