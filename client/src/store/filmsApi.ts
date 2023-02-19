// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Typed interfaces for film response
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

//The Films api handles the films request
//Limit prop limits the number of films sent from the database and can be set at a component level
export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    //requests all the films from the database
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
    // requests films by action genre
    getActionFilms: builder.query<FilmResponse, undefined>({
      query: () => ({
        url: "/genre/action",
        method: "GET",
      }),
    }),
    // requests films by animation genre
    getAnimationFilms: builder.query<FilmResponse, undefined>({
      query: () => ({
        url: "/genre/animation",
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useGetAllFilmsQuery, useGetFilmByIdQuery, useGetActionFilmsQuery, useGetAnimationFilmsQuery,
} = filmsApi;