import React, { FormEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FooterStyles from "./FooterStyles";
import { clearUserDetails } from "../../../store/authSlice";
import { useDispatch } from "react-redux";

//The footer component displays the sitemap and is displayed across the bottom of all pages apart from login & signup
const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  {
    /* When the user clicks Logout this function will delete the isAuthenticated prop from
local storage and uses a react-router navigate to redirect the user to the login screen */
  }
  const logout = () => {
    dispatch(clearUserDetails());
    navigate("/");
  };
  return (
    //custom styling is implemented using styled components
    <FooterStyles>
      <nav className="Footer">
        <ul>
          <li>
            {/*When Home is clicked redirect to the Home page */}
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            {/*When Films is clicked redirect to the Films page */}
            <NavLink to="/films">Films</NavLink>
          </li>
          <li>
            {/*When Subscribe is clicked redirect to the Subscribe page */}
            <NavLink to="/subscribe">Subscribe</NavLink>
          </li>
          <li>
            {/*When Logout is clicked the user is redirected to the login page */}
            <a onClick={logout}>Logout</a>
          </li>
        </ul>
        <p>©FilmFrenzy 2023</p>
      </nav>
    </FooterStyles>
  );
};
export default Footer;
