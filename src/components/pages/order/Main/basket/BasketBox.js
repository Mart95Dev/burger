import styled from "styled-components";
import { theme } from "./../../../../../theme/index";

function BasketBox({ className, children }) {
  return <BasketBoxStyled className={className}>{children}</BasketBoxStyled>;
}

export default BasketBox;

const BasketBoxStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0px 16px;
`;
