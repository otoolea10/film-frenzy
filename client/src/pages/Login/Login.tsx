import React from "react";
import LoginStyles from "./LoginStyles";
import Button from "../../components/Button/Button";
import { useLazyLoginQuery } from "../../store/loginApi";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import filmBanner from "../../../public/assets/images/banners/film-banner.jpg";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import LoginForm from "../../components/LoginForm/LoginForm";

//Typed properties
interface LoginProps {
  email: string;
  password: string;
  showPassword: boolean;
}
/*Login page allows the user to log into the application*/
const Login = (): JSX.Element => {
  return (
    //custom styling is implemented using styled components
    <LoginStyles>
      <HeroBanner
        heroBannerImage={filmBanner}
        heroBannerHeading="Welcome To Film Frenzy"
      />
      <SkinnyBanner bannerHeading="Please enter your details to login" />
      <LoginForm />
    </LoginStyles>
  );
};
export default Login;
