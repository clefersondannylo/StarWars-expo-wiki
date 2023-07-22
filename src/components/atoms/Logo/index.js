import React from "react";
import { LogoImage } from "./styles";
import logoImage from "../../../../assets/StarWarsLogo.png";

export const Logo = () => {
  return <LogoImage source={logoImage} />;
};
