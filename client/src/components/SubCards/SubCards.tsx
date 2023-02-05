import React from "react";
import SubCard from "./SubCard/SubCard";
import planData from "./planData.json";
import { SubCardsStyles } from "./SubCardsStyles";

//The SubCards components pulls data from the planData array and maps the information to the SubCard component
const SubCards = () => {
  return (
    //custom styling is implemented using styled components
    <SubCardsStyles>
      <div className="sub-cards-container">
        {planData.subCards.map((card) => (
          <SubCard {...card} />
        ))}
      </div>
    </SubCardsStyles>
  );
};
export default SubCards;
