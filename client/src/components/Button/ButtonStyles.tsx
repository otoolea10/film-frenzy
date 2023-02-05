import styled from "styled-components";

const ButtonStyles = styled.button`
  background-color: transparent;
  color: white;
  width: 150px;
  height: 50px;
  margin-top: 2rem;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #fff;
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    width: 150px;
    height: 50px;
    margin: -25px 0 0 -15%;
    border-radius: 45px;
    font-size: 16px;
  }
`;
export default ButtonStyles;
