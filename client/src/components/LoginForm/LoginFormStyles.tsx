import styled from "styled-components";
import loginBackground from "../../../public/assets/images/banners/login-background.jpg";

const LoginFormStyles = styled.div`
  .login-container {
    display: grid;
    grid-template-columns: auto;
    width: 30%;
    margin: 1rem auto;
  }

  & .login-button {
    margin: 1rem 0 0 40px;
    height: 45px;
    width: 220px;
    background-color: #27323f;
    border: 2px solid #27323f;
    color: white;
  }
  label {
    font-size: 20px;
  }
  h2 {
    margin-bottom: 3rem;
  }
  input {
    margin: 1rem;
    width: 60%;
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

  @media (max-width: 767px) {
    .login-container {
      width: 55%;
    }

    & .login-button {
      margin: 1rem 0 0 0;
      height: 45px;
      width: 200px;
    }

    input {
      margin: 1rem 0;
      width: 100%;
    }
  }
`;
export default LoginFormStyles;
