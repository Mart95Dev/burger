import React from "react";
import styled from "styled-components";
import { theme } from "./../../../../../theme/index";

function Total({ amountToPay }) {
  return (
    <TotalStyled>
      <span>Total</span>
      <span>{amountToPay}</span>
    </TotalStyled>
  );
}

export default Total;

const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.family.stylish};
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.P4};
`;
