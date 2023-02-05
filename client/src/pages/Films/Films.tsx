import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import ItemCards from "../../components/ItemCards/ItemCards";
import { FilmsStyles } from "./FilmsStyles";
import { useGetAllFilmsQuery } from "../../store/filmsApi";

//Films component is used to display the Films page
const Films = () => {
  const { isLoading, data } = useGetAllFilmsQuery({ title: "Films" });
  return (
    //custom styling is implemented using styled components
    <FilmsStyles>
      {/*  HeroBanner used to display page title with an image in the background*/}
      <HeroBanner
        heroBannerImage={"assets/images/banners/lens-banner.jpg"}
        heroBannerHeading="Films"
      />
      {/*  ItemCards used to display all films available*/}
      {isLoading && "I am loading!"}
      {!isLoading && !!data && <ItemCards data={data.documents} />}
    </FilmsStyles>
  );
};
export default Films;
