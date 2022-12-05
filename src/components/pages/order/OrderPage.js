import React from "react";
import styled from "styled-components";
// import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";

export default function OrderPage() {
  //state
  // const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
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
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;
