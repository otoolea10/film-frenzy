import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import ItemCards from "../../components/ItemCards/ItemCards";
import { FilmsStyles } from "./FilmsStyles";

//Films component is used to display the Films page
const Films = () => {
  return (
    //custom styling is implemented using styled components
    <FilmsStyles>
      {/*  HeroBanner used to display page title with an image in the background*/}
      <HeroBanner
        heroBannerImage={"assets/images/banners/lens-banner.jpg"}
        heroBannerHeading="Films"
      />
      {/*  ItemCards used to display all films available*/}
      <ItemCards />
    </FilmsStyles>
  );
};
export default Films;
