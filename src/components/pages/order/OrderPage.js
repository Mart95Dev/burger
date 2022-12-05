import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
// import Navbar from "./Navbar";
// import Main from "./Main";

export default function OrderPage() {
  //state
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
          <h1>
            Hey, <span className="username">{username}</span>
          </h1>
          <Link to="/">
            <button>Se déconnecter</button>
          </Link>
        </div>
        <div className="main">Main</div>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }

  .navbar {
    background: blue;
    height: 10vh;
  }
  .main {
    background: green;
    flex: 1;
  }
`;
