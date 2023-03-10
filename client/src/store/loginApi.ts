// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Typed interfaces for the auth response
export interface AuthResponse {
  email: string;
  name: string;
  password: string;
  _id: string;
  level: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

//Typed interfaces for product queries
export interface AuthRequest {
  email?: string;
  password?: string;
}

//The Login Api handles the user authentication
export const loginApi = createApi({
  reducerPath: "login",
  keepUnusedDataFor: 1800,
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  serializeQueryArgs: ({ queryArgs }) => "user",
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, AuthRequest>({
      query: (queries) => ({
        url: `/login`,
        body: queries,
        method: "POST",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useLoginMutation } = loginApi;
