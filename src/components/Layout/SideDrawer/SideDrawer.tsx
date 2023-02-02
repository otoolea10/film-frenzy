import React from "react";
import { NavLink } from "react-router-dom";
import SideDrawerStyles from "./SideDrawerStyles";

//Typed properties
interface SideDrawerProps {
  open: boolean;
  closed: () => void;
}
const SideDrawer = ({ open, closed }: SideDrawerProps) => {
  return (
    //If open is set to true then store SideDrawer is open
    <SideDrawerStyles
      className={`SideDrawer ${open ? "Open" : "Close"}`}
      onClick={closed}
    >
      {/*Close SideDrawer if clicked */}
      {/*Display close button top right */}
      <h1 onClick={closed}>X</h1>
      {/*Create Navigational List for SideDrawer menu*/}
      <nav>
        <ul>
          <li>
            {/*When Home is clicked redirect to the Home page */}
            <NavLink to="/">Home &gt;</NavLink>
          </li>
          {/*When Films is clicked redirect to the Products page */}
          <li>
            <NavLink to="/films">Films &gt;</NavLink>
          </li>
        </ul>
      </nav>
    </SideDrawerStyles>
  );
};

export default SideDrawer;
