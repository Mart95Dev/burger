import React from "react";
import { theme } from "../../../../../theme";
import styled from "styled-components";

function TextCodeReact() {
  return (
    <TextCodeReactStyled>
      <span>Codé avec ❤️ et React.JS</span>
    </TextCodeReactStyled>
  );
}

export default TextCodeReact;

const TextCodeReactStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${theme.colors.white};
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.P2};
  }
`;
