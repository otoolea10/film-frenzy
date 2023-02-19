import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  
  .categoryTitle {
    color: black;
    font-family: "Bebas Neue", cursive;
  }
`;

const FilmCardsStyles = styled.div`
  & .item-card-container {
    display: grid;
    padding-left: 1%;
    grid-template-columns: auto auto auto auto auto auto;
  }
  .categoryTitle {
    color: black;
    font-family: "Bebas Neue", cursive;
    font-size: 3rem;
    position: relative;
    text-align: center;
    margin-bottom: -1%;
  }
  @media (max-width: 1025px) {
    overflow: hidden;
    & .item-card-container {
      padding-left: 2%;
      grid-template-columns: auto auto auto;
    }
  }
  @media (max-width: 1025px) {
    padding-left: 5%;
  }
  @media (max-width: 767px) {
    & .item-card-container {
      margin-left: 3%;
      grid-template-columns: auto auto;
    }
  }
`;
export default FilmCardsStyles;
