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
  @media (max-width: 767px) {
    padding-right: 15px;
    padding-bottom: 3rem;

    & img {
      width: 150px;
      height: 80%;
    }
    & a {
      text-decoration: none;
    }
  }
`;
export default ItemCardStyles;
