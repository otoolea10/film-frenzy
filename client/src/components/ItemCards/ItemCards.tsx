import React from "react";
import ItemCard from "./ItemCard/ItemCard";
import itemCardsData from "./ItemCardsData.json";
import ItemCardsStyles from "./ItemCardsStyles";
import { Film } from "../../store/filmsApi";

//Typed properties of the component
interface ItemCardsProps {
  data: Array<Film>;
}

/* ItemCards component maps the film data from the api to the ItemCard component.
The key is set by the unique id assigned to the film and the url is appended with the film's id. */
const ItemCards = ({ data }: ItemCardsProps) => {
  return (
    //custom styling is implemented using styled components
    <ItemCardsStyles>
      <div className="item-card-container">
        {data.map((card) => (
          <ItemCard key={card._id} {...card} itemLink={`/films/${card._id}`} />
        ))}
      </div>
    </ItemCardsStyles>
  );
};
export default ItemCards;
