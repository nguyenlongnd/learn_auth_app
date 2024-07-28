import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:5000/api";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/auth/`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    // eslint-disable-next-line no-unused-labels
    signUp: builder.mutation({
      query: (payload) => ({
        url: "sign-up",
        method: "POST",
        body: payload,
      }),
    }),
    signIn: builder.mutation({
      query: (payload) => ({
        url: "sign-in",
        method: "POST",
        body: payload,
      }),
    }),
    signInGoogle: builder.mutation({
      query: (payload) => ({
        url: "sign-in-google",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignInGoogleMutation } = authApi;
