import styled from "styled-components";
import BoxHeader from "./BasketBox";
import BoxFooter from "./BasketBox";
import BasketBody from "./BasketBody";
import Total from "./Total";
import TextFooter from "./TextCodeReact";
import { formatPrice } from "./../../../../../utils/maths";

export default function Basket() {
  return (
    <BasketStyled>
      <BoxHeader className="position-header">
        <Total amountToPay={formatPrice(0.0)} />
      </BoxHeader>

      <BasketBody />

      <BoxFooter className="position-footer">
        <TextFooter />
      </BoxFooter>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 0px 15px;
  width: 350px;
  overflow-y: auto;

  .position-header {
    position: sticky;
    top: 0px;
    z-index: 2;
  }

  .position-footer {
    position: sticky;
    bottom: 0px;
    z-index: 2;
  }
`;
