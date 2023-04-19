import React from "react";
import styled from "styled-components";
import { BsHeartFill } from "react-icons/bs";

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
  border: 1px solid green;
  background: black;
  color: white;
  height: 70px;
  z-index: 3;

  span {
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
  }

  .heart {
    background-color: red;
  }
`;
