import styled from "styled-components";

const OrderFormStyles = styled.form`
  .order-container {
    display: grid;
    grid-template-columns: auto;
    width: 50%;
    margin: 1rem auto;
  }

  label {
    font-size: 20px;
  }
  input {
    margin: 1rem;
    height: 45px;
    border-radius: 10px;
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  input:focus,
  :valid {
    outline: none;
    border: 1.5px solid #46c6ea;
  }
  button {
    width: 25%;
    float: right;
    margin-right: 1rem;
    background-color: transparent;
    border: 2px solid #27323f;
    color: #27323f;
  }
  @media (max-width: 1025px) {
    .order-container {
      width: 60%;
    }

    input {
      margin: 1rem 0;
      width: 100%;
    }
    button {
      margin: 1rem auto;
      border-radius: 10px;
      width: 60%;
    }
  }
  @media (max-width: 767px) {
    .order-container {
      width: 60%;
    }

    input {
      margin: 1rem 0;
      width: 100%;
    }
    button {
      margin: 1rem auto;
      border-radius: 10px;
      width: 60%;
    }
  }
`;

export default OrderFormStyles;
