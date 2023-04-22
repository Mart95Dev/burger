import styled from "styled-components";
import { theme } from "./../../../../../theme/index";

function BasketBody() {
  return (
    <BasketBodyStyled>
      <span className="empyt-message">Votre commande est vide. </span>
    </BasketBodyStyled>
  );
}

export default BasketBody;

const BasketBodyStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  overflow-y: scroll;

  .empyt-message {
    display: flex;
    height: calc(95vh - 10vh - 70px - 70px);
    align-items: center;
    justify-content: center;
    line-height: 2px;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`;
