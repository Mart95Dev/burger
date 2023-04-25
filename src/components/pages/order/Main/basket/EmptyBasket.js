import React from "react";
import styled from "styled-components";
import { theme } from "./../../../../../theme/index";

function EmptyBasket() {
  return (
    <EmptyBasketStyled>
      <span className="empyt-message">Votre commande est vide. </span>
    </EmptyBasketStyled>
  );
}

export default EmptyBasket;

const EmptyBasketStyled = styled.div`
  .empyt-message {
    display: flex;
    height: calc(95vh - 10vh - 70px - 70px);
    align-items: center;
    justify-content: center;
    line-height: 2px;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`;
