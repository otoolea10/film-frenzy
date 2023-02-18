import React from "react";
import ButtonStyles from "./ButtonStyles";
import { NavLink } from "react-router-dom";

//Typed properties of the component
interface ButtonProps {
  buttonClick?: any;
  buttonText: string;
  className?: string;
}
/*Button accepts an onClick, title and className
It is used to across the site as a standardised button*/
const Button = ({ buttonClick, buttonText, className }: ButtonProps) => {
  return (
    //custom styling is implemented using styled components
    <ButtonStyles onClick={buttonClick} className={className}>
      {buttonText}
    </ButtonStyles>
  );
};

export const NavButton = ({
  buttonClick,
  buttonText,
  className,
}: ButtonProps) => (
  <NavLink to={buttonClick} className={className}>
    <Button buttonText={buttonText} className={className} />
  </NavLink>
);
export default Button;
