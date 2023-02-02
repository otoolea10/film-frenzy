import React, { FC } from "react";
import DrawerToggleStyles from "./DrawerToggleStyles";

//Typed properties
interface DrawerToggleProps {
  clicked?: () => void;
}
/* Drawer Toggle is a simple hamburger menu that when clicked opens the mobile menu using the side drawer*/
const DrawerToggle = ({ clicked }: DrawerToggleProps) => {
  return (
    <DrawerToggleStyles onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </DrawerToggleStyles>
  );
};
export default DrawerToggle;
