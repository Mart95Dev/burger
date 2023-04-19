import React from "react";
import styled from "styled-components";

function HeaderBasket() {
  return (
    <HeaderBasketStyled>
      <span>total</span>
      <span>0,00€</span>
    </HeaderBasketStyled>
  );
}

export default HeaderBasket;

const HeaderBasketStyled = styled.div``;
