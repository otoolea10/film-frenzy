import React from "react";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import SubCards from "../../components/SubCards/SubCards";
import lensBanner from "../../../public/assets/images/banners/lens-banner.jpg";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

//Subscription component used to display the subscription plans
const Subscription = () => {
  return (
    <>
      <HeroBanner heroBannerImage={lensBanner} />
      {/*Skinny banner to introduce the subscription plans*/}
      <SkinnyBanner bannerHeading="Choose a Subscription Plan" />
      {/*Subcards to display the available subscription plans and their information*/}
      <SubCards />
    </>
  );
};
export default Subscription;
