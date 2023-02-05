import React from "react";
import { NavLink } from "react-router-dom";
import FooterStyles from "./FooterStyles";

//The footer component displays the sitemap and is displayed across the bottom of all pages apart from login & signup
const Footer = () => {
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
        </ul>
        <p>©FilmFrenzy 2023</p>
      </nav>
    </FooterStyles>
  );
};
export default Footer;
