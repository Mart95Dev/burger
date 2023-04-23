import styled from "styled-components";
import { theme } from "./../../../../../theme/index";

function BasketBox({ children }) {
  return <BasketBoxStyled>{children}</BasketBoxStyled>;
}

export default BasketBox;

const BasketBoxStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  z-index: 2;
  padding: 0px 16px;
`;
