import React from "react";
import styled from "styled-components";
import RightSide from "./RightSide";
// import LeftSide from "./LeftSide";

export default function Navbar() {
  return (
    <NavbarStyled>
      <div className="left-side">Left</div>
      <RightSide />

      {/* <LeftSide />
       */}
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
  /* border-radius: 15px 15px 0 0;
  font-family: "Open Sans", sans-serif; */

  .left-side {
    background: pink;
  }
`;
