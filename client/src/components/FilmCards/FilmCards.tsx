import React from "react";
import FilmCard from "./FilmCard/FilmCard";
import FilmCardsStyles from "./FilmCardsStyles";
import { Film } from "../../store/filmsApi";

//Typed properties of the component
interface FilmCardsProps {
  data: Array<Film>;
}

//Film Cards component maps the film data from the api to the ItemCard component.
//The key is set by the unique id assigned to the film and the url is appended with the film's id.
const FilmCards = ({ data }: FilmCardsProps) => {
  return (
    //custom styling is implemented using styled components
    <FilmCardsStyles>
      <div className="film-card-container">
        {data.map((card) => (
          <FilmCard key={card._id} {...card} itemLink={`/films/${card._id}`} />
        ))}
      </div>
    </FilmCardsStyles>
  );
};
export default FilmCards;
