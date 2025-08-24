import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  token: localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem("user")) || null,
  analiyticUser:[]
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
    setAnaliyticUser:(state,{payload})=>{
     state.analiyticUser=[...state.analiyticUser,payload]
    }
  },
});

export const { setUser, logout ,setAnaliyticUser} = commerSlice.actions;

export default commerSlice.reducer;
