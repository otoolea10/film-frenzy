import styled from "styled-components";

const FilmCardsStyles = styled.div`
  .film-card-container {
    display: grid;
    padding-left: 1%;
    grid-template-columns: auto auto auto auto auto auto;
  }
  @media (max-width: 1025px) {
    overflow: hidden;
    padding-left: 5%;
    .film-card-container {
      padding-left: 2%;
      grid-template-columns: auto auto auto;
    }
  }
  @media (max-width: 767px) {
    .film-card-container {
      margin-left: 3%;
      grid-template-columns: auto auto;
    }
  }
`;
export default FilmCardsStyles;
