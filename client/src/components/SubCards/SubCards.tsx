import React from "react";
import SubCard from "./SubCard/SubCard";
import { SubCardsStyles } from "./SubCardsStyles";
import { useGetAllSubscriptionsQuery } from "../../store/subscriptionApi";

//The SubCards components pulls data from the planData array and maps the information to the SubCard component
const SubCards = () => {
  const { isLoading, data } = useGetAllSubscriptionsQuery("");
  return (
    //custom styling is implemented using styled components
    <SubCardsStyles>
      <div className="sub-cards-container">
        {!isLoading &&
          !!data?.documents &&
          data.documents.map((card) => <SubCard id={card._id} {...card} />)}
      </div>
    </SubCardsStyles>
  );
};
export default SubCards;
