import { useContext } from "react";
import styled from "styled-components";
import { theme } from "./../../../../../theme/index";
import CardBasket from "./../../../../reusable-ui/CardBasket";
import EmptyBasket from "./EmptyBasket";
import PanelContext from "../../../../context/OrderContext";
import { formatPrice } from "./../../../../../utils/maths";
import { DEFAULT_IMAGE } from "./../imageDefault";

function BasketBody({ className }) {
  //this.state.
  const { basket, handleDeleteBasket, isModeAdmin, setAmountTotal } =
    useContext(PanelContext);

  //comportement
  const hasModeAdminActived = (id) => {
    if (isModeAdmin) {
      return handleDeleteBasket(id);
    }
  };

  //display
  return (
    <BasketBodyStyled>
      {basket.length === 0 ? (
        <EmptyBasket />
      ) : (
        basket.map(({ id, title, imageSource, price, quantity }) => (
          <CardBasket
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
            priceInfo={formatPrice(price)}
            quantity={quantity}
            onDeleteBasket={() => hasModeAdminActived(id)}
          />
        ))
      )}
    </BasketBodyStyled>
  );
}

export default BasketBody;

const BasketBodyStyled = styled.div`
  flex: 1;
  padding: 0px 16px;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  overflow-x: hidden;
`;
