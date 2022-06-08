import { configureStore } from "@reduxjs/toolkit";
import appSlices from "./slices/appSlices";

export default configureStore({
  reducer: {
    app: appSlices,
  },
});
