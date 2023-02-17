import React, { ReactElement, useEffect } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Films from "./pages/Films/Films";
import FilmDetails from "./pages/FilmDetails/FilmDetails";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import { connect } from "react-redux";
import { RootState } from "./store/store";
import Subscribe from "./pages/Subscribe/Subscribe";
import OfflineBanner from "./components/OfflineBanner/OfflineBanner";
import Basket from "./pages/Basket/Basket";
// @ts-ignore
import { Offline } from "react-detect-offline";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";
import Users from "./pages/Users/Users";

export interface AuthenticationProps {
  isAuthenticated: boolean;
}

const App = ({ isAuthenticated }: AuthenticationProps) => {
  useEffect(() => {
    // What this does is adds the authenticated parameter to local storage so that a user no longer needs to
    // login each time a different section of the site is clicked unless new window is open
    // This is done by saving the authentication status in local storage as a string
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    // Remove the authentication status from local storage when the user closes the window
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem("isAuthenticated");
    });
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Offline>
        <OfflineBanner />
      </Offline>
      {/*If the user is not authenticated then the app will display the login page*/}
      {/*{!isAuthenticated && (*/}
      {/*  <Routes>*/}
      {/*    <Route path="/" element={<Login />} />*/}
      {/*    <Route path="*" element={<Navigate to="/" replace />} />*/}
      {/*  </Routes>*/}
      {/*)}*/}
      {/*If the user is authenticated then the app will allow the user to access the rest of the pages*/}
      {!isAuthenticated && (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/films/:filmId" element={<FilmDetails />} />
            <Route path="/films" element={<Films />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/basket/:planId" element={<Basket />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route
              path="/order-complete/:planId"
              element={<OrderConfirmation />}
            />
          </Routes>
        </Layout>
      )}
    </BrowserRouter>
  );
};

// This just checks if the user is authenticated from local storage or from the state
// and then returns the authentication as a prop to be used during routing
const mapStateToProps = (state: RootState) => {
  const isAuthenticated =
    JSON.parse(localStorage.getItem("isAuthenticated") || "false") ||
    state.auth.queries.user?.status === "fulfilled";

  return {
    isAuthenticated,
  };
};

export default connect(mapStateToProps)(App);
