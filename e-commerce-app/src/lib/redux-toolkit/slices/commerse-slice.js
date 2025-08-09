import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  user:JSON.parse(localStorage.getItem("user"))||null
};

export const counterSlice = createSlice({
  name: "commers",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const { setUser } = counterSlice.actions;

export default counterSlice.reducer;
