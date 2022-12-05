import React from "react";
import Logo from "./../../reusable-ui/Logo";
import styled from "styled-components";
// import { theme } from "../../../theme/index";

export default function LeftSide() {
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
  background: pink;
  display: flex;
  align-items: center;
  margin-left: 20px;
  width: 240.48px;
  height: 98.19px;
`;
