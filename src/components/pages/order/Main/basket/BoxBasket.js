import styled from "styled-components";
import { theme } from "./../../../../../theme/index";

function BoxBasket({ children }) {
  return <BoxBasketStyled>{children}</BoxBasketStyled>;
}

export default BoxBasket;

const BoxBasketStyled = styled.div`
  border: 3px solid yellow;
  height: 70px;
  background: ${theme.colors.background_dark};
  z-index: 2;
  padding: 0px 16px;
`;
