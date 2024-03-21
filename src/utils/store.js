import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";

const appStore = configureStore({
  reducer: {
    search: searchSlice,
  },
});

export default appStore;
