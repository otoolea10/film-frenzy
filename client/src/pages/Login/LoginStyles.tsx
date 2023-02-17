import styled from "styled-components";
import loginBackground from "../../../public/assets/images/banners/login-background.jpg";

const LoginStyles = styled.div`
  background-color: rgba(39, 50, 63, 0.3);
  height: 100vh;

  img {
    margin-bottom: -1rem;
  }
  h1 {
    transform: translateY(100%) translateX(-80%);
  }
  h2 {
    margin: 0;
    transform: translateY(20px);
  }
  @media (max-width: 1025px) {
    h1 {
      font-size: 40px;
      transform: translateY(-25%) translateX(-90%);
    }
  }
  @media (max-width: 767px) {
    img {
      margin-bottom: -1rem;
    }
    h1 {
      font-size: 27px;
      transform: translateY(20%) translateX(-90%);
    }
    h2 {
      font-size: 20px;
      margin: 0;
      transform: translateY(30px);
    }
  }
`;
export default LoginStyles;
