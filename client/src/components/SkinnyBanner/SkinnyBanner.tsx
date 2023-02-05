import SkinnyBannerStyles from "./SkinnyBannerStyles";

interface SkinnyBannerProps {
  bannerImage?: string;
  bannerHeading: string;
}
const SkinnyBanner = ({ bannerImage, bannerHeading }: SkinnyBannerProps) => {
  return (
    //Skinny banner can accept and image but defaults to a solid blue div
    // accepts a heading as a requirement
    <SkinnyBannerStyles>
      <img src={bannerImage} />
      <h2>{bannerHeading}</h2>
    </SkinnyBannerStyles>
  );
};
export default SkinnyBanner;
