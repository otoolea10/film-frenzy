import React from "react";
import NavBarStyles from "./NavBarStyles";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../DrawerToggle";
import { clearUserDetails } from "../../../store/authSlice";
import { useDispatch } from "react-redux";

//typed properties of component
interface NavBarProps {
  drawerToggleClicked?: () => void;
  isAdmin: boolean;
}

const NavBar = ({ drawerToggleClicked, isAdmin }: NavBarProps) => {
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
            {/*If the user is an admin then the Users link will be displayed. If clicked it will re-direct to the Users page */}
            {isAdmin && (
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            )}
            {/*When Logout is clicked the user is redirected to the login page */}
            <li>
              <a onClick={logout}>Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </NavBarStyles>
  );
};
export default NavBar;
