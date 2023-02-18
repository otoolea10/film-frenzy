// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Typed interfaces for the subscription response
export interface SubscriptionResponse {
  documents: Array<Subscription>;
}
//Typed interfaces for the subscription
export interface Subscription {
  _id: string;
  title: string;
  monthlyPrice: string;
  device: number;
  yearlyPrice: string;
}

//The subscription api handles requesting subscription data
export const subscriptionApi = createApi({
  reducerPath: "subscription",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/subscription" }),
  endpoints: (builder) => ({
    //requests all the subscriptions and their data from the database
    getAllSubscriptions: builder.query<SubscriptionResponse, string>({
      query: () => ({
        url: `/`,
        method: "GET",
      }),
    }),
    //requests a single subscription plan data via its id
    getSubscriptionById: builder.query<SubscriptionResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetAllSubscriptionsQuery, useGetSubscriptionByIdQuery } =
  subscriptionApi;
