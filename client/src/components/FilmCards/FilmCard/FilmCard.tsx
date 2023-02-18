import React from "react";
import FilmCardStyles from "./FilmCardStyles";
import { Film } from "../../../store/filmsApi";
import { NavButton } from "../../Button/Button";
import { Link } from "react-router-dom";

const FilmCard = ({ title, imageURL, itemLink, description }: Film) => {
  //Film Card displays the film's image, title, and allows the user to click on it to view more details in the single view page
  return (
    //custom styling is implemented using styled components
    <FilmCardStyles>
      <div className="item-card-front">
        <img src={imageURL} />
        <Link to={itemLink}>{title}</Link>
      </div>
      <div className="item-card-back">
        <p>{description}</p>
        <NavButton buttonText="View More" buttonClick={itemLink} />
      </div>
    </FilmCardStyles>
  );
};
export default FilmCard;
