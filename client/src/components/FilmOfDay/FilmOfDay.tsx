import React, { useState } from "react";
import itemCardsData from "./RandomFilmData.json";
import { FilmOfDayStyles } from "./FilmOfDayStyles";

const getRandomObject = (array: string | any[]) => {
  //Generates a random number
  const randomObject = array[Math.floor(Math.random() * array.length)];
  return randomObject;
};
//Film of the day component displays a random film's title, image and description by pulling the data from the itemCardsData array
const FilmOfDay = () => {
  //Selects a random object from the itemCardsData array
  const [randomFilm] = useState(() => getRandomObject(itemCardsData.itemCards));
  return (
    //custom styling is implemented using styled components
    <FilmOfDayStyles>
      <div className="film-of-day-container">
        <img
          src={randomFilm.itemImage}
          className="film-image"
          alt={randomFilm.itemTitle}
        />
        <h1 className="film-title">{randomFilm.itemTitle}</h1>
        <p className="film-desc">{randomFilm.itemDescription}</p>
      </div>
    </FilmOfDayStyles>
  );
};
export default FilmOfDay;
