import React from "react";
import styled from "styled-components";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

export default function Navbar() {
  return (
    <NavbarStyled>
      <RightSide />
      <LeftSide />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  border: 2px solid blue;
  margin-top: 20px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
