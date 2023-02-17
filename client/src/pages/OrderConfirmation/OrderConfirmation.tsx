import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import theater from "../../../public/assets/images/banners/theater-banner.jpg";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import { useParams } from "react-router-dom";
import { useGetSubscriptionByIdQuery } from "../../store/subscriptionApi";

const OrderConfirmation = () => {
  const { planId } = useParams();
  const { isLoading, data } = useGetSubscriptionByIdQuery(planId!);
  return (
    <>
      <HeroBanner heroBannerImage={theater} />
      <SkinnyBanner bannerHeading="Order Completed" />
      <h1>You are now subscribed to the {data?.documents[0].title} plan </h1>
      <p>Thank you for your order</p>
    </>
  );
};
export default OrderConfirmation;
