import React from "react";
import { SubCardStyles } from "./SubCardStyles";
import Button, { NavButton } from "../../Button/Button";
import { useParams } from "react-router-dom";

//typed properties of the component
interface SubCardProps {
  title: string;
  monthlyPrice: string;
  yearlyPrice: string;
  device: number;
  id: string;
  buttonClassName?: string;
}

/* The subcard component is used to display a plan's title, monthly cost, yearly cost and allowed devices
The title is displayed in its own banner at the top of the card whilst the rest of the information is displayed using a list
The button will allow a user to add a subscription plan to their account */
const SubCard = ({
  title,
  monthlyPrice,
  yearlyPrice,
  device,
  id,
  buttonClassName,
}: SubCardProps) => {
  return (
    //custom styling is implemented using styled components
    <SubCardStyles>
      <div className="plan-title">
        <h2>{title}</h2>
      </div>
      <ul>
        <li>Monthly Cost: £{monthlyPrice}</li>
        <li>Yearly Cost: £{yearlyPrice}</li>
        <li>Devices: {device}</li>
      </ul>
      <NavButton
        buttonText="Select Plan"
        buttonClick={`/basket/${id}`}
        className={buttonClassName}
      />
    </SubCardStyles>
  );
};
export default SubCard;
