import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import FilmCards from "../../components/FilmCards/FilmCards";
import { FilmsStyles } from "./FilmsStyles";
import {
  useGetActionFilmsQuery,
  useGetAllFilmsQuery,
  useGetAnimationFilmsQuery,
} from "../../store/filmsApi";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import FilmCard from "../../components/FilmCards/FilmCard/FilmCard";

//Films component is used to display the Films page
const Films = () => {
  // all of these pull the functions from films api to get the different categories
  const { isLoading, data } = useGetAllFilmsQuery({ title: "Films" });
  const { data: actionData } = useGetActionFilmsQuery(undefined);
  const { data: animationData } = useGetAnimationFilmsQuery(undefined);

  const actionFilms = actionData?.documents || [];
  const animationFilms = animationData?.documents || [];
  return (
    //custom styling is implemented using styled components
    <FilmsStyles>
      {/*  HeroBanner used to display page title with an image in the background*/}
      <HeroBanner
        heroBannerImage={"assets/images/banners/lens-banner.jpg"}
        heroBannerHeading="Films"
      />
      {/* Categorisation functionality pulled from the front end user api to show action films */}
      <SkinnyBanner bannerHeading="Our Favourites" />
      <div className="film-card-container">
        {actionFilms.slice(0, 6).map((card) => (
          <FilmCard key={card._id} {...card} itemLink={`/films/${card._id}`} />
        ))}
      </div>
      {/* Categorisation functionality pulled from the front end user api to show animation films */}
      <SkinnyBanner bannerHeading="Animation" />
      <div className="film-card-container">
        {animationFilms.slice(0, 6).map((card) => (
          <FilmCard key={card._id} {...card} itemLink={`/films/${card._id}`} />
        ))}
      </div>
      <SkinnyBanner bannerHeading="All Films" />
      {/*  ItemCards used to display all films available*/}
      {isLoading && "I am loading!"}
      {!isLoading && !!data && <FilmCards data={data.documents} />}
    </FilmsStyles>
  );
};
export default Films;
