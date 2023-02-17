// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface FilmResponse {
  documents: Array<Film>;
}
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
  limit?: number;
}

// Define a service using a base URL and expected endpoints
//requests all films from backend
//Limit prop limits the number of films sent
export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getAllFilms: builder.query<{ documents: Film[] }, FilmsQueries>({
      query: ({ limit }) => ({
        url: `api${limit ? `?limit=${limit}` : ""}`,
        method: "GET",
      }),
    }),
    //requests a single film from the database using the film's id
    getFilmById: builder.query<FilmResponse, string>({
      query: (id) => ({
        url: `/api/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllFilmsQuery, useGetFilmByIdQuery } = filmsApi;
