import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Films from "./pages/Films/Films";
import FilmDetails from "./pages/FilmDetails/FilmDetails";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import { connect, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import Subscribe from "./pages/Subscribe/Subscribe";
import OfflineBanner from "./components/OfflineBanner/OfflineBanner";
import Basket from "./pages/Basket/Basket";
// @ts-ignore
import { Offline } from "react-detect-offline";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";
import Users from "./pages/Users/Users";
import { setUserDetails } from "./store/authSlice";

//Typed properties for authentication
export interface AuthenticationProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
}

//React routing has been used to handle the routing of this single page application.
//The application is a PWA which is handled in the webpack.config using the GenerateSW api
const App = ({ isAuthenticated, isAdmin }: AuthenticationProps) => {
  const dispatch = useDispatch();
  //Retrieves user token from local storage and puts it into state
  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (token && !isAuthenticated) {
      dispatch(setUserDetails({ token, level: "" }));
    }
  }, []);

  return (
    <BrowserRouter>
      {/*If the user is offline then the app will display a banner warning them of this*/}
      <Offline>
        <OfflineBanner />
      </Offline>
      {/*/If the user is not authenticated then the app will display the login page*/}
      {!isAuthenticated && (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
      {/*If the user is authenticated then the app will allow the user to access the rest of the pages*/}
      {isAuthenticated && (
        <Layout isAdmin={isAdmin}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/films/:filmId" element={<FilmDetails />} />
            <Route path="/films" element={<Films />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/basket/:planId" element={<Basket />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route
              path="/order-complete/:planId"
              element={<OrderConfirmation />}
            />
            {/*If the user is an admin then the app will allow the user to view the Users page*/}
            {isAdmin && <Route path="/users" element={<Users />} />}
          </Routes>
        </Layout>
      )}
    </BrowserRouter>
  );
};

{
  /* This just checks if the user is authenticated from local storage or from the state
and then returns the authentication as a prop to be used during routing.
If the user is an admin then the isAdmin prop will be set to true */
}
const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: !!state.auth.token,
    isAdmin: !!state.auth.isAdmin,
  };
};

export default connect(mapStateToProps)(App);
