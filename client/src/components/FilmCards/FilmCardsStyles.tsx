import styled from "styled-components";

const FilmCardsStyles = styled.div`
  & .item-card-container {
    display: grid;
    padding-left: 1%;
    grid-template-columns: auto auto auto auto auto auto;
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
