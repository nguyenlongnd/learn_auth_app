import { authApi } from "../services/authService";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: { currentUser: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signIn.matchFulfilled,
      (state, { payload }) => {
        state.currentUser = payload;
      }
    );
  },
});

export default authSlice.reducer;
export const selectCurrentUser = (state) => state.authSlice.currentUser;
