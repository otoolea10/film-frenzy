import React from "react";
import { SubCardStyles } from "./SubCardStyles";
import Button from "../../Button/Button";

//typed properties of the component
interface SubCardProps {
  planTitle: string;
  monthlyPrice: string;
  yearlyPrice: string;
  devices: string;
}

/* The subcard component is used to display a plan's title, monthly cost, yearly cost and allowed devices
The title is displayed in its own banner at the top of the card whilst the rest of the information is displayed using a list
The button will allow a user to add a subscription plan to their account */
const SubCard = ({
  planTitle,
  monthlyPrice,
  yearlyPrice,
  devices,
}: SubCardProps) => {
  return (
    //custom styling is implemented using styled components
    <SubCardStyles>
      <div className="plan-title">
        <h2>{planTitle}</h2>
      </div>
      <ul>
        <li>Monthly Cost: {monthlyPrice}</li>
        <li>Yearly Cost: {yearlyPrice}</li>
        <li>Devices: {devices}</li>
      </ul>
      <Button buttonText="Select Plan" />
    </SubCardStyles>
  );
};
export default SubCard;
