import React from "react";
import { OfflineBannerStyles } from "./OfflineBannerStyles";
import warning from "../../../public/assets/icons/warning-sign.svg";
const OfflineBanner = () => {
  return (
    <OfflineBannerStyles>
      <img src={warning} />
      <h2>You are currently offline</h2>
    </OfflineBannerStyles>
  );
};
export default OfflineBanner;
