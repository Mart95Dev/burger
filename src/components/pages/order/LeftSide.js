import React from "react";
import Logo from "./../../reusable-ui/Logo";
import styled from "styled-components";

export default function RightSide() {
  return (
    <ContainerRightSideStyled>
      <Logo />
    </ContainerRightSideStyled>
  );
}

const ContainerRightSideStyled = styled.div`
  display: flex-inline;
  border: 6px solid purple;
  margin-left: 20px;
  transform: s;
`;
