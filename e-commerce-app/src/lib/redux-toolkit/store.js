import { configureStore } from '@reduxjs/toolkit'
import  comerslice from "./slices/commerse-slice.js"
export const store = configureStore({
  reducer: {comerslice},
})