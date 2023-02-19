import React, { useState } from "react";
import LoginFormStyles from "./LoginFormStyles";
import Button from "../../components/Button/Button";
import { useLoginMutation } from "../../store/loginApi";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import filmBanner from "../../../public/assets/images/banners/film-banner.jpg";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import { setUserDetails } from "../../store/authSlice";
import { useDispatch } from "react-redux";

//Typed properties
interface LoginFormProps {
  email: string;
  password: string;
}
/*Login page allows the user to log into the application*/
const LoginForm = (): JSX.Element => {
  //Sets the initial state of the password textbox to hide the user's password
  const [values, setValues] = useState<LoginFormProps>({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const [error, setError] = useState<string>("");
  const [triggerLogin, { isSuccess, isError, isLoading }] = useLoginMutation();

  //Handles the change of when the user enters a password and displays dots instead
  const handleChange =
    (prop: keyof LoginFormProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  // Handles the login and checks if the user's email and password are valid
  const handleLogin = async () => {
    if (values.email && values.password) {
      const userDetails = await triggerLogin(values).unwrap();
      dispatch(
        setUserDetails({ token: userDetails._id, level: userDetails.level })
      );
    }
    else {
      setError("Email and password cannot be blank");
    }
  };

  return (
    //custom styling is implemented using styled components
    <LoginFormStyles>
      <div className="login-container">
        <h2>Please enter your Login details below:</h2>
        <label>Email</label>
        <input
          type="email"
          id="email"
          value={values.email}
          onChange={handleChange("email")}
          required
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          onChange={handleChange("password")}
          value={values.password}
          required
        />
        {/*OnClick uses redux toolkit to validate the user's email and password.
      If both email and password are valid then the app will redirect to the home page
      */}
        {error && <p className="error">{error}</p>}
        <Button
          className="login-button"
          buttonClick={handleLogin}
          buttonText={"Login"}
        />
      </div>
    </LoginFormStyles>
  );
};
export default LoginForm;
