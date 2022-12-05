import React from "react";
import Logo from "./../../reusable-ui/Logo";
import styled from "styled-components";

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
  display: flex;
  align-items: center;
  width: 240.48px;
  height: 98.19px;
`;
