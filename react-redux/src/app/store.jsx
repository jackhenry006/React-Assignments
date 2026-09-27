import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../featuers/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
