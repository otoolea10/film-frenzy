import styled from "styled-components";

const DrawerToggleStyles = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 900;
  padding-top: 15px;
  & div {
    margin-top: 5px;
    width: 90%;
    height: 2px;
    background-color: white;
    margin-left: 20px;
    border: 1px solid white;
    border-radius: 25px;
  }
  @media (min-width: 767px) {
    display: none;
  }
`;
export default DrawerToggleStyles;
