import styled from "styled-components";

const FilmCardStyles = styled.div`
  background-color: #27323f;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 210px;
  height: 380px;
  text-align: center !important;
  border-radius: 10px;
  box-shadow: 9px 13px 26px -7px rgba(0, 0, 0, 0.65);
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  .film-card-front {
    position: absolute;
    height: 100%;
    width: 100%;
    margin: auto;
    backface-visibility: hidden;
  }
  .film-card-front img {
    height: 300px;
    width: 210px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .film-card-front a {
    color: white;
    text-decoration: none;
    font-size: 25px;
    padding: 0 10px;
  }
  &:hover {
    transform: rotateY(180deg);
    transition: transform 0.35s ease-in-out;
  }
  .film-card-back {
    padding: 20px;
    background-color: #27323f;
    color: white;
    transform: rotateY(180deg);
    backface-visibility: hidden;
  }

  @media (max-width: 767px) {
    width: 150px;
    height: 250px;

    & .film-card-front img {
      width: 150px;
      height: 190px;
      margin-bottom: 5px;
    }
    .film-card-back {
      display: none;
    }
    & .film-card-front a {
      font-size: 18px;
      text-decoration: underline;
    }
    &:hover {
      transform: rotateY(0);
    }
  }
`;
export default FilmCardStyles;
