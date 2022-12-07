import React from "react";
import styled from "styled-components";
import Navbar from "../order/Navbar/Navbar";
import Main from "../order/Main/Main";
import { theme } from "./../../../theme/index";

export default function OrderPage() {
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
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound}
      ${theme.borderRadius.extraRound} 0 0;
  }
`;
