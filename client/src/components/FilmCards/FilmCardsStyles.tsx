import styled from "styled-components";

const FilmCardsStyles = styled.div`
  & .item-card-container {
    display: grid;
    padding-left: 4%;
    grid-template-columns: auto auto auto auto auto;
  }
  @media (max-width: 1025px) {
    overflow: hidden;
    & .item-card-container {
      padding-left: 2%;
      grid-template-columns: auto auto auto;
    }
  }
  @media (max-width: 767px) {
    & .item-card-container {
      margin-left: 4%;
      grid-template-columns: auto auto;
    }
  }
`;
export default FilmCardsStyles;
