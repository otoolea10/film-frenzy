import styled from "styled-components";

export const FilmOfDayStyles = styled.div`
  width: 70%;
  height: 260px;
  margin: 1rem auto;
  border-radius: 10px;
  background-color: #27323f;
  padding: 0 10px;
  .film-of-day-container {
    display: grid;
  }
  .film-image {
    padding: 10px 0;
    height: 240px;
    grid-column: 1;
    grid-row: 1 / span 2;
  }
  .film-title {
    padding: 0 20px;
    color: white;
    grid-column: 2;
    grid-row: 1;
  }
  .film-desc {
    padding: 0 20px;
    color: white;
    grid-column: 2;
    grid-row: 2;
  }
  @media (max-width: 1025px) {
    width: 80%;
    height: 100%;
  }
  @media (max-width: 767px) {
    width: 70%;
    height: 100%;
    padding: 0 10px;

    .film-image {
      width: 80%;
      margin: auto;
      padding-top: 20px;
      height: 240px;
      grid-column: 1;
      grid-row: 1;
    }
    .film-title {
      grid-column: 1;
      grid-row: 2;
    }
    .film-desc {
      grid-column: 1;
      grid-row: 3;
    }
  }
`;
