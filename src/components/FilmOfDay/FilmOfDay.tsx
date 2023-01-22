import React, { useState } from "react";
import itemCardsData from "../ItemCards/ItemCardsData.json";

const getRandomObject = (array: string | any[]) => {
  const randomObject = array[Math.floor(Math.random() * array.length)];
  return randomObject;
};

const FilmOfDay = () => {
  const [randomFilm, setRandomFilm] = useState(() =>
    getRandomObject(itemCardsData.itemCards)
  );
  return (
    <>
      <p>{randomFilm.itemTitle}</p>
    </>
  );
};
export default FilmOfDay;
