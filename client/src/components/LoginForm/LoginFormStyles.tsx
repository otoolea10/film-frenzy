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
    font-weight: bold;
  }
  input {
    margin: 1rem;
    width: 60%;
    height: 30px;
  }
  
  .form-input-label {
    position: relative;
    color: #27323f;
    pointer-events: none;
    transform: translateY(1rem);
    transition: 150ms cubic-bezier(0.4,0,0.2,1);
    padding-bottom: 10px;
  }

  #header {
    padding-bottom: 25px;
    font-size: 23px;
    margin-left: -5%;
  }
  
  input {
    border: solid 1.5px #9e9e9e;
    border-radius: 7px;
    padding: 1rem;
    font-size: 1rem;
    color: #27323f;
    transition: border 150ms cubic-bezier(0.4,0,0.2,1);
  }
  
  input[type='password'] {
    letter-spacing: 0.3em;
  }
  
  input:focus, input:valid {
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
