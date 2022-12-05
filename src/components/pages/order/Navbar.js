import React from "react";
import styled from "styled-components";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import { theme } from "./../../../theme/index";

export default function Navbar() {
  return (
    <NavbarStyled>
      <LeftSide />
      <RightSide />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background-color: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0 0;
`;
