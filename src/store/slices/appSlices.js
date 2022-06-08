import { createSlice } from "@reduxjs/toolkit";

export const appSlices = createSlice({
  name: "app",
  initialState: {
    isLogin: false,
    news: [],
  },
  reducers: {
    setUserLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setNews: (state, action) => {
      state.news = action.payload;
    },
  },
});

export const { setUserLogin, setNews } = appSlices.actions;

export default appSlices.reducer;
