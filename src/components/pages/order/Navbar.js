import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
// import RightSide from "./RightSide";
// import LeftSide from "./LeftSide";

export default function Navbar() {
  //
  const { username } = useParams();
  //
  return (
    <NavbarStyled>
      <div className="left-side">Left</div>
      <div className="right-side">
        <h1>
          Hey, <span className="username">{username}</span>
        </h1>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>

      {/* <LeftSide />
      <RightSide /> */}
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
  .right-side {
    background: purple;
  }
`;
