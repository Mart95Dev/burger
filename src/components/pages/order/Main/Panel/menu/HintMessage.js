import React from "react";
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "./../../../../../../theme/index";

function HintMessage() {
  return (
    <HintMessageStyled>
      <span> Cliquer sur un produit pour le modifier</span>
      <HiCursorClick />
    </HintMessageStyled>
  );
}

export default HintMessage;

const HintMessageStyled = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyBlue};

  position: relative;
  top: 50px;

  span {
    margin-left: 10px;
    width: 400px;
  }
`;
