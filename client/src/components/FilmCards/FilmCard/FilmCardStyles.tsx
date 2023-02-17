import styled from "styled-components";

const FilmCardStyles = styled.div`
  background-color: #27323f;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 230px;
  height: 370px;
  text-align: center !important;
  border-radius: 10px;
  box-shadow: 9px 13px 26px -7px rgba(0, 0, 0, 0.65);
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  .item-card-front {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }
  .item-card-front img {
    height: 300px;
    width: 230px;
    border-radius: 10px;
    object-fit: cover;
  }
  .item-card-front a {
    color: white;
    text-decoration: none;
    font-size: 25px;
    margin-right: 1rem;
  }
  &:hover {
    transform: rotateY(180deg);
    transition: transform 0.35s ease-in-out;
  }
  .item-card-back {
    padding: 20px;
    background-color: #27323f;
    color: white;
    transform: rotateY(180deg);
    backface-visibility: hidden;
  }
  @media (max-width: 1025px) {
    margin-bottom: 10px;
    padding-bottom: 2rem;
    width: 250px;
    height: 390px;
    & img {
      width: 100%;
      height: 85%;
      margin-bottom: 10px;
    }
    & .item-card-front a {
      padding: 0.5rem;
      font-size: 20px;
    }
  }
  @media (max-width: 767px) {
    margin-bottom: 10px;
    padding-bottom: 2rem;
    width: 150px;
    height: 230px;
    & .item-card-front img {
      width: 150px;
      height: 190px;
      margin-bottom: 5px;
    }
    .item-card-back {
      display: none;
    }
    & .item-card-front a {
      font-size: 18px;
      text-decoration: none;
    }
    &:hover {
      transform: rotateY(0);
    }
  }
`;
export default FilmCardStyles;
