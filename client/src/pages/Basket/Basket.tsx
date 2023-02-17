import React from "react";
import OrderForm from "../../components/Ordering/OrderForm/OrderForm";
import { useParams } from "react-router-dom";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import SubCard from "../../components/SubCards/SubCard/SubCard";
import { useGetSubscriptionByIdQuery } from "../../store/subscriptionApi";
import BasketStyles from "./BasketStyles";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Theater from "../../../public/assets/images/banners/theater-banner.jpg";

//Basket page allows users to add their details to order a new subscription
//The page displays the selected plan details, how much the user needs to pay, an input form to enter the user's details, and an order now button
const Basket = () => {
  //  planId is pulled from the url
  const { planId } = useParams();
  //Using redux the single subscription data is pulled from the database
  const { isLoading, data } = useGetSubscriptionByIdQuery(planId!);
  return (
    <BasketStyles>
      <HeroBanner heroBannerImage={Theater} />
      <SkinnyBanner bannerHeading={"Order Details"} />
      {!isLoading &&
        !!data?.documents &&
        data.documents.map((card) => (
          <SubCard
            id={card._id}
            key={card._id}
            {...card}
            buttonClassName="sub-button"
          />
        ))}
      <SkinnyBanner bannerHeading={"Delivery Details"} />
      <h3>Price to pay today: £{data?.documents[0].yearlyPrice}</h3>
      <OrderForm id={data?.documents[0]._id} />
    </BasketStyles>
  );
};
export default Basket;
