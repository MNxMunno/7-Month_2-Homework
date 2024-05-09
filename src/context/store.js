import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./conterSlice";

export const store = configureStore({
  reducer: {},
});
// console.log(counterSlice)
