import React from "react";
import { CustomText } from "./styles";

export const Text = ({ children, color, marginTop }) => {
  return (
    <CustomText marginTop={marginTop} color={color}>
      {children}
    </CustomText>
  );
};
