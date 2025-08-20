import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  user: JSON.parse(localStorage.getItem("user")) || null,
  nav: false,
};

export const commerSlice = createSlice({
  name: "commers",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    toggleNav: (state) => {
      state.nav = !state.nav;
    },
    setNav: (state, action) => {
      state.nav = action.payload;
    },
  },
});

export const { setUser, toggleNav, setNav } = commerSlice.actions;

export default commerSlice.reducer;
