import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavbarStyled>
      <p>1</p>
      <p>2</p>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  border: 2px solid blue;
`;
