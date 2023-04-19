import React from "react";
import styled from "styled-components";
import { theme } from "./../../../../../theme/index";

function FooterBasket() {
  return (
    <FooterBasketStyled>
      <span>Codé avec ❤️ et React.JS</span>
    </FooterBasketStyled>
  );
}

export default FooterBasket;

const FooterBasketStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.background_dark};
  color: ${theme.colors.white};
  height: 70px;
  z-index: 2;

  span {
    font-family: ${theme.fonts.family.stylish};
    font-style: normal;
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.P2};
    line-height: 25px;
  }
`;
