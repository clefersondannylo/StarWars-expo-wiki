import styled from "styled-components/native";

export const CustomText = styled.Text`
  font-size: 24px;
  color: ${({ color }) => color || "#fff"};
  font-weight: bold;
  margin-top: ${({ marginTop }) => `${marginTop}px` || 0};
`;
