import { configureStore } from "@reduxjs/toolkit";
import { btDatVeReducer } from "./DATVE/sliceDatVe"
export const store = configureStore({
  reducer: {
    btDatVeReducer,
  },
});
