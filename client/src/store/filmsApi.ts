// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Typed interfaces for film
export interface Film {
  _id: number;
  title: string;
  description: string;
  shortDes: string;
  YOR: string;
  actor: string;
  genre: string;
  director: string;
  imageURL: string;
  itemLink: string;
}
//Typed interfaces for film queries
export interface FilmsQueries {
  title?: string;
  genre?: string;
}

// Define a service using a base URL and expected endpoints
export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getAllFilms: builder.query<{ documents: Film[] }, FilmsQueries>({
      query: (queries) => `api`,
    }),
    getFilm: builder.query<{ documents: Film }, string>({
      query: (id) => `api/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllFilmsQuery, useGetFilmQuery } = filmsApi;
