import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllFilmsQuery, useGetFilmByIdQuery } from "../../store/filmsApi";
import { Film } from "../../store/filmsApi";
import { FilmDetailsStyles } from "./FilmDetailsStyles";
import filmCollection from "../../../public/assets/images/banners/film-collection.jpg";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import FilmCards from "../../components/FilmCards/FilmCards";

//The FilmDetails page displays a single page view of a film when a user clicks on it from the film card
const FilmDetails = () => {
  //pulls the film's id from the url and requests the information for that film from the database
  const { filmId } = useParams();
  const { isLoading, data: { documents: data } = {} } = useGetFilmByIdQuery(
    filmId!
  );
  return (
    //custom styling is implemented using styled components
    <FilmDetailsStyles>
      <HeroBanner heroBannerImage={filmCollection} />
      {/*FilmDetail component uses css grid to order the film image, title, and details.
       The film data is pulled from the database via an api and redux toolkit query*/}
      {!isLoading && !!data && (
        <>
          <SkinnyBanner bannerHeading={data[0].title} />
          <div className="grid-container">
            <div className="film-img">
              <img src={data[0].imageURL} />
            </div>
            <div className="film-title">
              <h1>{data[0].title}</h1>
            </div>
            <div className="film-description">
              <p>Genre: {data[0].genre}</p>
              <p>Release Year: {data[0].YOR}</p>
              <p>Director: {data[0].director}</p>
              <p>{data[0].description}</p>
            </div>
          </div>
        </>
      )}
    </FilmDetailsStyles>
  );
};

export default FilmDetails;
