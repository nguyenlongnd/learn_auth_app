import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:5173";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/auth/`,
  }),
  endpoints: (builder) => {
    // eslint-disable-next-line no-unused-labels
    signUp: builder.mutation({
      query: (payload) => ({
        url: "sign-up",
        method: "POST",
        body: payload,
      }),
    });
  },
});

export const { useSignUpMutation } = authApi;