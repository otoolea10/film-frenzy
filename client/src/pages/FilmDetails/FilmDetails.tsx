import React from "react";
import { useParams } from "react-router-dom";
import { useGetFilmQuery } from "../../store/filmsApi";
import { Film } from "../../store/filmsApi";
import { FilmDetailsStyles } from "./FilmDetailsStyles";

//The FilmDetails page displays a single page view of a film when a user clicks on it from the film card
const FilmDetails = () => {
  //pulls the film's id from the url and requests the information for that film from the database
  const { filmId } = useParams();
  const { isLoading, data: { documents: data } = {} } = useGetFilmQuery(
    filmId!
  );

  return (
    //custom styling is implemented using styled components
    <FilmDetailsStyles>
      {/*FilmDetail component uses css grid to order the film image, title, and details.
       The film data is pulled from the database via an api and axios*/}
      {!isLoading && !!data && (
        <div className="grid-container">
          <div className="product-img">
            <img src={data.imageURL} />
          </div>
          <div className="product-title">
            <h1>{data.title}</h1>
          </div>
          <div className="product-description">
            <p>{data.description}</p>
          </div>
        </div>
      )}
    </FilmDetailsStyles>
  );
};

export default FilmDetails;
