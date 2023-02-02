import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import SkinnyBanner from "../components/SkinnyBanner/SkinnyBanner";
import ItemCards from "../components/ItemCards/ItemCards";
import glassOnion from "../../public/assets/images/banners/glass-onion-banner.png";
import FilmOfDay from "../components/FilmOfDay/FilmOfDay";

//Home component used to display Home page
const Home = () => {
  return (
    <>
      {/* HeroBanner used to display featured film*/}
      <HeroBanner heroBannerImage={glassOnion} />
      {/*Skinny banner to introduce the top pick films*/}
      <SkinnyBanner bannerHeading="Top Picks" />
      {/*Displays the top pick films*/}
      <ItemCards itemCardDataEnd={5} />
      {/*Skinny banner to introduce the film of the day*/}
      <SkinnyBanner bannerHeading="Film of the Day" />
      {/*Automated random film of the day*/}
      <FilmOfDay />
    </>
  );
};
export default Home;
