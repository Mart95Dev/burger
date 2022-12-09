import React from "react";
import Logo from "../../../reusable-ui/Logo";
import styled from "styled-components";
import { refreshPage } from "../../../../utils/window";

export default function LeftSide() {
  //state

  //comportement

  //display
  return (
    <ContainerLogoNavbarStyled>
      <Logo className={"logo-order-page"} onClick={refreshPage} />
    </ContainerLogoNavbarStyled>
  );
}

const ContainerLogoNavbarStyled = styled.div`
  display: flex;
  align-items: center;
  width: 240.48px;
  height: 98.19px;

  .logo-order-page {
    cursor: pointer;
  }
`;
