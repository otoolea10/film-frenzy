import styled from "styled-components";

const FooterStyles = styled.div`
  background-color: #27323f;
  color: white;
  height: 150px;
  display: flex;
  justify-content: center;
  display: flex;
  align-items: center;
  & ul {
    list-style: none;
    display: flex;
    align-self: flex-end;
    padding: 0;
    flex-grow: 0.5;
    justify-content: space-around;
    cursor: pointer;
  }
  & a {
    font-size: 26px;
    color: white;
    text-decoration: none;
    padding: 15px;
    bottom: 0;
  }
  p {
    width: 31%;
    margin: auto;
  }

  & .footer-logo {
    height: 75px;
    width: 75px;
    margin-left: -5%;
    padding-bottom: 2rem;
    cursor: pointer;
    padding: 20px 0 0 45%;
  }
  @media (max-width: 767px) {
    height: 130px;
    margin-top: 1rem;
    & a {
      font-size: 18px;
      padding: 5px;
      bottom: 0;
    }
    & li {
      white-space: pre-line;
      margin-bottom: 15px;
    }
    & ul {
      flex-grow: 1;
      justify-content: space-evenly;
      flex-wrap: wrap;
      padding: 0 10px;
    }
    p {
      width: 48%;
      margin: auto;
    }
  }
`;
export default FooterStyles;
