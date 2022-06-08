import { createSlice } from "@reduxjs/toolkit";

export const appSlices = createSlice({
  name: "app",
  initialState: {
    isLogin: false,
  },
  reducers: {
    setUserLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setUserLogin } = appSlices.actions;

export default appSlices.reducer;
