import React from "react";
import styled from "styled-components";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

export default function Navbar() {
  return (
    <NavbarStyled>
      <LeftSide />
      <RightSide />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  /* background-color: white; */
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  /* border-radius: 15px 15px 0 0;
   */
`;
