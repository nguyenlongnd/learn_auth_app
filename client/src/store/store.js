import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authService";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSliceReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authSlice: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
setupListeners(store.dispatch);
