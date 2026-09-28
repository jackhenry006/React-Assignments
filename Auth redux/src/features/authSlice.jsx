import { createSlice } from "@reduxjs/toolkit";

const authslice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    removeUser: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { addUser, removeUser } = authslice.actions;
export default authslice.reducer;
