import React from "react";
import styled from "styled-components";

function HeaderBasket() {
  return (
    <HeaderBasketStyled>
      <span className="total">total</span>
      <span className="addition">0,00€</span>
    </HeaderBasketStyled>
  );
}

export default HeaderBasket;

const HeaderBasketStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border: 1px solid red;
  background: black;
  color: #ffa01b;
  height: 70px;
  z-index: 3;

  .total {
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
  }

  .addition {
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    letter-spacing: 2px;
  }
`;
