import { configureStore } from "@reduxjs/toolkit";
import commerseReducer from "./slices/commerse-slice.js";
export const store = configureStore({
  reducer: { commerce: commerseReducer },
});
