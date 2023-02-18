import React from "react";
import { OfflineBannerStyles } from "./OfflineBannerStyles";
import warning from "../../../public/assets/icons/warning-sign.svg";

//The offline banner component appears at the top of the screen when the user is offline
//It is used to inform the user that they currently do not have internet access
const OfflineBanner = () => {
  return (
    <OfflineBannerStyles>
      <img src={warning} />
      <h2>You are currently offline</h2>
    </OfflineBannerStyles>
  );
};
export default OfflineBanner;
