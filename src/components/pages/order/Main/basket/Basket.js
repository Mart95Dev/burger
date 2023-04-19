import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="header">Montant</div>
      <div className="content">
        <span>Votre commande est vide</span>
      </div>
      <div className="footer">Footer</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  order: 0;
  flex-grow: 0;
  width: 350px;
  height: 100%;

  background: ${theme.colors.background_white};
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 0px 15px;

  .header {
    border: 1px solid red;
    background: black;
    color: white;
    height: 70px;
    z-index: 3;
  }
  .content {
    border: 1px solid blue;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
  }
  .footer {
    border: 1px solid green;
    background: black;
    color: white;
    height: 70px;
    z-index: 3;
  }
`;
