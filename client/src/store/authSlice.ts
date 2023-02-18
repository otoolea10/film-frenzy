// Need to use the React-specific entry point to import createApi
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Typed properties for the authentication state
export interface AuthenticationState {
  token: string | null;
  isAdmin: boolean | null;
}
//Typed properties for the user details payload
export interface UserDetailsPayload {
  token: string;
  level: string;
}

const initialState: AuthenticationState = { token: null, isAdmin: null };

//The authSlice handles storing the user's details
const authSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    //Takes in user details as a payload and stores token in local storage so that the user remains authenticated
    setUserDetails: (state, { payload }: PayloadAction<UserDetailsPayload>) => {
      localStorage.setItem("TOKEN", payload.token);
      return {
        ...state,
        token: payload.token,
        isAdmin: payload.level === "admin",
      };
    },
    //Removes token from local storage and sets state back to initial state
    clearUserDetails: () => {
      localStorage.removeItem("TOKEN");
      return initialState;
    },
  },
});

export const { setUserDetails, clearUserDetails } = authSlice.actions;

export default authSlice.reducer;
