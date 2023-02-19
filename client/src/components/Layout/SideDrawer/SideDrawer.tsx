import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SideDrawerStyles from "./SideDrawerStyles";
import { useDispatch } from "react-redux";
import { clearUserDetails } from "../../../store/authSlice";

//Typed properties
interface SideDrawerProps {
  open: boolean;
  closed: () => void;
  isAdmin: boolean;
}
const SideDrawer = ({ open, closed, isAdmin }: SideDrawerProps) => {
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
    //If open is set to true then store SideDrawer is open
    //Custom styling is implemented using styled components
    <SideDrawerStyles
      className={`SideDrawer ${open ? "Open" : "Close"}`}
      onClick={closed}
    >
      {/*Display close button top right and onClick closes the side drawer */}
      <h1 onClick={closed}>X</h1>
      {/*Create Navigational List for SideDrawer menu*/}
      <nav>
        <ul>
          <li>
            {/*When Home is clicked redirect to the Home page */}
            <NavLink to="/">Home &gt;</NavLink>
          </li>
          {/*When Films is clicked redirect to the Films page */}
          <li>
            <NavLink to="/films">Films &gt;</NavLink>
          </li>
          {/*When Subscribe is clicked redirect to the Subscribe page */}
          <li>
            <NavLink to="/subscribe">Subscribe &gt;</NavLink>
          </li>
          {/*If the user is an admin then the Users link will be displayed. If clicked it will re-direct to the Users page */}
          {isAdmin && (
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          )}
          {/*When Logout is clicked the user is redirected to the login page */}
          <li>
            <a onClick={logout}>Logout &gt;</a>
          </li>
        </ul>
      </nav>
    </SideDrawerStyles>
  );
};

export default SideDrawer;
