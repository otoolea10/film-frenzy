import React from "react";
import NavBarStyles from "./NavBarStyles";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../DrawerToggle";

//typed properties of component
interface NavBarProps {
  drawerToggleClicked?: () => void;
}
const NavBar = ({ drawerToggleClicked }: NavBarProps) => {
  return (
    //custom styling is implemented using styled components
    <NavBarStyles>
      <div>
        {/*Display Logo top right */}
        <Logo className="header-logo" />
        {/*When screen size is less than 767px then show Mobile toolbar with hamburger icon */}
        <nav className="mobile-header">
          <DrawerToggle clicked={drawerToggleClicked} />
        </nav>
      </div>
      {/*When screen size is greater than 767px then show Desktop toolbar */}
      <div className="desktop-nav">
        <nav>
          {/*Display site's title*/}
          <h1>Film Frenzy</h1>
          <ul>
            {/*When Home is clicked redirect to the Home page */}
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            {/*When Films is clicked redirect to the Films page */}
            <li>
              <NavLink to="/films">Films</NavLink>
            </li>
            {/*When Subscribe is clicked redirect to the Subscribe page */}
            <li>
              <NavLink to="/subscribe">Subscribe</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </NavBarStyles>
  );
};
export default NavBar;
