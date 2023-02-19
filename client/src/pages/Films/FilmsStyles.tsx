import styled from "styled-components";

export const FilmsStyles = styled.div`
  box-shadow: 0px 0px 0px #fff;
  button {
    border-color: transparent;
  }
  h1 {
    font-size: 95px;
    margin: -18% auto 0 auto;
  }
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
    h1 {
      font-size: 80px;
      margin: -22% auto 0 auto;
    }
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 55px;
      margin: -32% auto 0 auto;
    }
    .film-card-container {
      margin-left: 3%;
      grid-template-columns: auto auto;
    }
  }
`;
