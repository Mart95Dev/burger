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

const NavbarStyled = styled.div`
  margin-top: 20px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px 15px 0 0;
`;
