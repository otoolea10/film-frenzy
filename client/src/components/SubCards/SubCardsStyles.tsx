import styled from "styled-components";

export const SubCardsStyles = styled.div`
  & .sub-cards-container {
    display: grid;
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 767px) {
    & .sub-cards-container {
      grid-template-columns: auto;
    }
  }
`;
