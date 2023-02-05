import React, { ReactElement } from "react";
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

export interface AuthenticationProps {
  isAuthenticated: boolean;
}
//The App uses React Router to handle the page routing
const App = ({ isAuthenticated }: AuthenticationProps) => {
  return (
    <BrowserRouter>
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
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>{" "}
        </Layout>
      )}
    </BrowserRouter>
  );
};
const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.auth.queries.user?.status === "fulfilled",
});
export default connect(mapStateToProps)(App);
