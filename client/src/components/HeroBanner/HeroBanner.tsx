import React from "react";
import HeroBannerStyles from "./HeroBannerStyles";

//typed properties of the component
interface HeroBannerProps {
  heroBannerHeading?: string;
  heroBannerText?: string;
  heroBannerImage?: string;
}

const HeroBanner = ({
  heroBannerHeading,
  heroBannerText,
  heroBannerImage,
}: HeroBannerProps) => {
  return (
    //HeroBanner displays a large banner at the top of a page and accepts an image, heading, and text.
    //custom styling is implemented using styled components
    <HeroBannerStyles>
      <img src={heroBannerImage} alt="Hero" />
      <h1>{heroBannerHeading}</h1>
      <p>{heroBannerText}</p>
    </HeroBannerStyles>
  );
};
export default HeroBanner;
