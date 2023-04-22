import styled from "styled-components";
import { theme } from "../../../../../theme";
import HeaderBasket from "./HeaderBasket";
import FooterBasket from "./FooterBasket";
import ContentBasket from "./ContentBasket";

export default function Basket() {
  return (
    <BasketStyled>
      <HeaderBasket />
      <ContentBasket className="content" />
      <FooterBasket />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  width: 350px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  flex: none;
  order: 0;
  flex-grow: 0;

  background: ${theme.colors.background_white};
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 0px 15px;

  .content {
    overflow-y: scroll;
  }
`;
