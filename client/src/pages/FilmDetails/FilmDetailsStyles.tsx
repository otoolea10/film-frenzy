import styled from "styled-components";

export const FilmDetailsStyles = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    width: 50%;
    margin: 1rem auto;
  }
  .film-img img {
    height: 500px;
    width: 100%;
    margin: auto;
    object-fit: contain;
  }

  .film-title {
    text-align: center;
    font-size: 26px;
    color: #313941;
  }
  .film-description {
    font-size: 25px;
    color: #313941;
  }
  @media (max-width: 767px) {
    .grid-container {
      width: 80%;
    }
    .film-img img {
      height: 250px;
    }
    .film-title {
      font-size: 20px;
    }
  }
`;
