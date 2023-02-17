import React from "react";
import { useParams } from "react-router-dom";
import { useGetFilmByIdQuery } from "../../store/filmsApi";
import { Film } from "../../store/filmsApi";
import { FilmDetailsStyles } from "./FilmDetailsStyles";

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
      {/*FilmDetail component uses css grid to order the film image, title, and details.
       The film data is pulled from the database via an api and redux toolkit query*/}
      {!isLoading && !!data && (
        <div className="grid-container">
          <div className="product-img">
            <img src={data[0].imageURL} />
          </div>
          <div className="product-title">
            <h1>{data[0].title}</h1>
          </div>
          <div className="product-description">
            <p>{data[0].description}</p>
          </div>
        </div>
      )}
    </FilmDetailsStyles>
  );
};

export default FilmDetails;
