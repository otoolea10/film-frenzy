import styled from "styled-components";

const BasketStyles = styled.div`
  h3 {
    width: 25%;
    margin: 1rem auto;
    font-size: 25px;
  }
  .sub-button {
    display: none;
  }
  @media (max-width: 1025px) {
    h3 {
      width: 35%;
    }
  }
  @media (max-width: 767px) {
    h3 {
      width: 50%;
    }
  }
`;
export default BasketStyles;
