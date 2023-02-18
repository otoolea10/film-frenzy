import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loginApi } from "./loginApi";
import { filmsApi } from "./filmsApi";
import { subscriptionApi } from "./subscriptionApi";
import { usersApi } from "./usersApi";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [filmsApi.reducerPath]: filmsApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [subscriptionApi.reducerPath]: subscriptionApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    auth: authSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(filmsApi.middleware)
      .concat(loginApi.middleware)
      .concat(subscriptionApi.middleware)
      .concat(usersApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
