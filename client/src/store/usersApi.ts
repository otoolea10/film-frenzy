// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Types properties for users response
export interface UsersResponse {
  documents: Array<Users>;
}

//Typed interfaces for users
export interface Users {
  _id: number;
  fname: string;
  sname: string;
  DOB: string;
  email: string;
  username: string;
  level: string;
}

//The users api handles the users requests
export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/users" }),
  endpoints: (builder) => ({
    //requests all the users from the database
    getAllUsers: builder.query<UsersResponse, string>({
      query: () => ({
        url: `/`,
        method: "GET",
      }),
    }),
    //requests a single user from the database via its id
    getUserById: builder.query<UsersResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetAllUsersQuery, useGetUserByIdQuery } = usersApi;
