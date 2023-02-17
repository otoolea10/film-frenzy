import React from "react";
import OrderForm from "../../components/Ordering/OrderForm/OrderForm";
import { useParams } from "react-router-dom";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import SubCard from "../../components/SubCards/SubCard/SubCard";
import { useGetSubscriptionByIdQuery } from "../../store/subscriptionApi";
import BasketStyles from "./BasketStyles";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Theater from "../../../public/assets/images/banners/theater-banner.jpg";
import Button from "../../components/Button/Button";

const Basket = () => {
  const { planId } = useParams();
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
