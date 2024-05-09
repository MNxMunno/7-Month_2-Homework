import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./conterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
// console.log(counterSlice)
