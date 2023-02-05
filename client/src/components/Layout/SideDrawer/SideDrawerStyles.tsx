import styled from "styled-components";

const SideDrawerStyles = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 950;
  background-color: #27323f;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  padding: 30px;

  & a {
    font-size: 25px;
    color: white;
    text-decoration: none;
    padding: 15px;
  }
  & h1 {
    font-size: 30px;
    color: white;
    margin-top: 0px;
    text-align: right;
  }
  & li {
    margin-bottom: 50px;
  }
  & ul {
    list-style: none;
    margin-top: 85px;
    position: sticky;
  }

  @media (max-width: 767px) {
    &.Open {
      display: block;
    }

    & .Text {
      font-size: 100px;
      color: white;
    }
  }
`;
export default SideDrawerStyles;
