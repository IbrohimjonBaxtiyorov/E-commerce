import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const commerSlice = createSlice({
  name: "commers",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    deleteUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { setUser, deleteUser } = commerSlice.actions;

export default commerSlice.reducer;
