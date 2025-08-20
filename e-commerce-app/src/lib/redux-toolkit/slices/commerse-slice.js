import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  token: localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const commerSlice = createSlice({
  name: "commers",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.clear()
    },
  },
});

export const { setUser, logout } = commerSlice.actions;

export default commerSlice.reducer;
