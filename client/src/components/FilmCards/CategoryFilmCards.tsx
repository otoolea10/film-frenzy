import React from "react";
import FilmCard from "./FilmCard/FilmCard";
import FilmCardsStyles from "./CategoryFilmCardsStyles";
import { useGetAllFilmsQuery, useGetActionFilmsQuery, useGetAnimationFilmsQuery, Film } from "../../store/filmsApi";

// Typed properties of the component
interface FilmCardsProps {
  data: Array<Film>;
}

// Film Cards component maps the film data from the api to the ItemCard component.
// The key is set by the unique id assigned to the film and the url is appended with the film's id.
const FilmCards = ({ data }: FilmCardsProps) => {
  const { data: allData } = useGetAllFilmsQuery({});
  const { data: actionData } = useGetActionFilmsQuery(undefined);
  const { data: animationData } = useGetAnimationFilmsQuery(undefined);

  const allFilms = allData?.documents || [];
  const actionFilms = actionData?.documents || [];
  const animationFilms = animationData?.documents || [];

  return (
    // Custom styling is implemented using styled components
    <FilmCardsStyles>
      <h2 className="categoryTitle"> Our Favourites</h2>
      <div className="item-card-container">
        {actionFilms.slice(0, 6).map((card) => (
          <FilmCard key={card._id} {...card} itemLink={`/films/${card._id}`} />
        ))}
      </div>
      <h2 className="categoryTitle"> Our Top Animation Films</h2>
      <div className="item-card-container">
        {animationFilms.slice(0, 6).map((card) => (
          <FilmCard key={card._id} {...card} itemLink={`/films/${card._id}`} />
        ))}
      </div>
      <h2 className="categoryTitle"> All Films</h2>
      <div className="item-card-container">
        {allFilms.map((card) => (
          <FilmCard key={card._id} {...card} itemLink={`/films/${card._id}`} />
        ))}
      </div>
   
    </FilmCardsStyles>
  );
};
export default FilmCards;
