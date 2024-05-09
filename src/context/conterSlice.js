import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value: 9,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc: (state) => {
      state.value += 1;
    },
    // dec: (state) => {
    //   state.value -= 1;
    // },
    // res: (state) => {
    //   state.value = 0;
    // },
  },
});

export const { inc, dec, res } = counterSlice.actions;

export default counterSlice.reducer;
