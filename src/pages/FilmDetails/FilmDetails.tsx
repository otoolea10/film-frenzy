import React from "react";
import itemCardsData from "../../components/ItemCards/ItemCardsData.json";
import { useLocation, useParams } from "react-router-dom";
import "./FilmDetailsStyles.css";

const FilmDetails = () => {
  //fetches filmId parameter from url e.g. films/1
  const { filmId: filmIdString } = useParams();
  const filmId = Number(filmIdString) - 1;
  return (
    <>
      {/*FilmDetail component uses css grid to order the film image, title, and details*/}
      <div className="grid-container">
        <div className="product-img">
          <img src={itemCardsData.itemCards[filmId].itemImage} />
        </div>
        <div className="product-title">
          <h1>{itemCardsData.itemCards[filmId].itemTitle}</h1>
        </div>
        <div className="product-description">
          <p>{itemCardsData.itemCards[filmId].itemDescription}</p>
        </div>
      </div>
    </>
  );
};

export default FilmDetails;
