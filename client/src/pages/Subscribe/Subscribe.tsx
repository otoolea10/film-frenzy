import React from "react";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import SubCards from "../../components/SubCards/SubCards";
import lensBanner from "../../../public/assets/images/banners/lens-banner.jpg";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

//Subscription component used to display the subscription plans
const Home = () => {
  return (
    <>
      <HeroBanner heroBannerImage={lensBanner} />
      {/*Skinny banner to introduce the subscription plans*/}
      <SkinnyBanner bannerHeading="Choose a Subscription Plan" />
      <SubCards />
    </>
  );
};
export default Home;
