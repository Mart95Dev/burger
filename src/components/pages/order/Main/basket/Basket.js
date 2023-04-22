import styled from "styled-components";
import BoxHeader from "./BoxBasket";
import BoxFooter from "./BoxBasket";
import Body from "./BodyBasket";
import Total from "./Total";
import TextFooter from "./TextCodeReact";
import { formatPrice } from "./../../../../../utils/maths";

export default function Basket() {
  return (
    <BasketStyled>
      <BoxHeader>
        <Total amountToPay={formatPrice(0.0)} />
      </BoxHeader>

      <Body />

      <BoxFooter>
        <TextFooter />
      </BoxFooter>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 0px 15px;
`;
