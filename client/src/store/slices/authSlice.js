// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";
// const { authApi } = require("../services/authService");

const authSlice = createSlice({
  name: "authSlice",
  initialState: { user: null, token: null },
  reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addMatcher
//       //handleData to store into storage
//       // authApi.endpoints.signUp.matchFulfilled,
//       // (state, {payload}) => {
//       //     state.token = payload.token,
//       //     state.user = payload.user,
//       // }
//       ();
//   },
});

export default authSlice.reducer;
// export const selectCurrentUser = state => state.authSlice.user
// export const selectTooken = state => state.authSlice.token
