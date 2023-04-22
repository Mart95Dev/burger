import React from "react";
import styled from "styled-components";
import { theme } from "./../../../../../theme/index";

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
  position: absolute;
  top: 0px;
  left: 0px;
  width: 350px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: ${theme.colors.background_dark};
  color: ${theme.colors.primary};
  z-index: 3;

  .total,
  .addition {
    font-family: ${theme.fonts.family.stylish};
    font-style: normal;
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P4};
    line-height: 45px;
  }

  .addition {
    font-weight: ${theme.fonts.weights.bold};
    display: flex;
    letter-spacing: 2px;
  }
`;
