import styled from "styled-components";
import { theme } from "./../../../../../theme/index";

function BodyBasket() {
  return (
    <BodyBasketStyled>
      <span>Votre commande est vide</span>
    </BodyBasketStyled>
  );
}

export default BodyBasket;

const BodyBasketStyled = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  overflow-y: scroll;

  span {
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 72px;

    color: ${theme.colors.greyBlue};
  }
`;
