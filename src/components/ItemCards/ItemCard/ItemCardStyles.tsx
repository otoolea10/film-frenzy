import styled from "styled-components";

const ItemCardStyles = styled.div`
  background-color: #27323f;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 230px;
  height: 350px;
  border-radius: 10px;
  box-shadow: 9px 13px 26px -7px rgba(0, 0, 0, 0.65);

  img {
    height: 300px;
    width: 230px;
    border-radius: 10px;
    object-fit: cover;
  }
  & a {
    color: white;
    text-decoration: none;
    padding-left: 1.5rem;
    font-size: 25px;
  }
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 1025px) {
    margin-bottom: 10px;
    padding-bottom: 2rem;
    width: 250px;
    height: 330px;
    & img {
      width: 100%;
      height: 90%;
      margin-bottom: 10px;
    }
    & a {
      padding: 0.5rem;
      font-size: 25px;
    }
  }
  @media (max-width: 767px) {
    margin-bottom: 10px;
    padding-bottom: 2rem;
    width: 150px;
    height: 200px;
    & img {
      width: 150px;
      height: 190px;
      margin-bottom: 5px;
    }
    & a {
      padding: 0.5rem;
      font-size: 18px;
      text-decoration: none;
    }
  }
`;
export default ItemCardStyles;
