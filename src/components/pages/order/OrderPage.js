import React from "react";
import styled from "styled-components";
// import Navbar from "./Navbar";
// import Main from "./Main";

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className="container">
        <p>kscqsncnqskcnqscnqsk</p>
        <p>nckncqknck</p>
        {/* <Navbar />
        <Main /> */}
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
  }
`;
