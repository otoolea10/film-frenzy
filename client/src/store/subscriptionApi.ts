// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Typed interfaces for the auth response
export interface SubscriptionResponse {
  documents: Array<Subscription>;
}

export interface Subscription {
  _id: string;
  title: string;
  monthlyPrice: string;
  device: number;
  yearlyPrice: string;
}

// Define a service using a base URL and expected endpoints
export const subscriptionApi = createApi({
  reducerPath: "subscription",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/subscription" }),
  endpoints: (builder) => ({
    getAllSubscriptions: builder.query<SubscriptionResponse, string>({
      query: () => ({
        url: `/`,
        method: "GET",
      }),
    }),
    getSubscriptionById: builder.query<SubscriptionResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllSubscriptionsQuery, useGetSubscriptionByIdQuery } =
  subscriptionApi;
