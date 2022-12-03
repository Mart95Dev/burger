import React from "react";
import Logo from "./../../reusable-ui/Logo";
import styled from "styled-components";
import { theme } from "../../../theme/index";

export default function RightSide() {
  //state

  //comportement

  //display
  return (
    <ContainerLogoNavbarStyled>
      <Logo />
    </ContainerLogoNavbarStyled>
  );
}

const ContainerLogoNavbarStyled = styled.div`
  /* transform: scale(0.3); */
  width: 240.48px;
  height: 98.19px;
  margin-left: 20px;
  border: 2px solid black;
`;
