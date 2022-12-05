import React from "react";
import styled from "styled-components";
import { theme } from "./../../../theme/index";

export default function Main() {
  return <MainStyled>Main</MainStyled>;
}

const MainStyled = styled.div`
  text-align: center;
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
`;
