import React from "react";
import ItemCardStyles from "./ItemCardStyles";
import { Film } from "../../../store/filmsApi";
import { NavButton } from "../../Button/Button";
import { Link } from "react-router-dom";

const ItemCard = ({ title, imageURL, itemLink, description }: Film) => {
  //ItemCard displays the film's image, title, and allows the user to click on it to view more details in the single view page
  return (
    //custom styling is implemented using styled components
    <ItemCardStyles>
      <div className="item-card-front">
        <img src={imageURL} />
        <Link to={itemLink}>{title}</Link>
      </div>
      <div className="item-card-back">
        <p>{description}</p>
        <NavButton buttonText="View More" buttonClick={itemLink} />
      </div>
    </ItemCardStyles>
  );
};
export default ItemCard;
