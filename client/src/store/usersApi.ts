// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface UsersResponse {
  documents: Array<Users>;
}
//Typed interfaces for film
export interface Users {
  _id: number;
  fname: string;
  sname: string;
  DOB: string;
  email: string;
  username: string;
  level: string;
}

// Define a service using a base URL and expected endpoints
//requests all users from backend

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/users" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<UsersResponse, string>({
      query: () => ({
        url: `/`,
        method: "GET",
      }),
    }),
    getUserById: builder.query<UsersResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUsersQuery, useGetUserByIdQuery } = usersApi;
