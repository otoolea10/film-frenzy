import React, { useState } from "react";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import SideDrawer from "./SideDrawer/SideDrawer";

//typed properties of component
interface LayoutProps {
  children: React.ReactNode;
  isAdmin: boolean;
}
const Layout = ({ children, isAdmin }: LayoutProps) => {
  //Logic to handle when SideDrawer is closed and sets ShowSideDrawer state to false
  const [showSideDrawer, toggleSideDrawer] = useState(false);
  const closeSideDrawer = () => {
    toggleSideDrawer(false);
  };
  const toggleSideDrawerHandler = () => {
    toggleSideDrawer(!showSideDrawer);
  };
  /* The layout component wraps all pages with the navbar and footer automatically rather than having to
    manually wrap each page with these components */
  return (
    <>
      <NavBar drawerToggleClicked={toggleSideDrawerHandler} isAdmin={isAdmin} />
      {/*SideDrawer sets the open and closed properties to the appropriate logic */}
      <SideDrawer
        open={showSideDrawer}
        closed={closeSideDrawer}
        isAdmin={isAdmin}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
