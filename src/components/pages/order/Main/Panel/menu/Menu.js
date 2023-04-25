import { useContext } from "react";
import PanelContext from "../../../../../context/OrderContext";
import styled from "styled-components";
import Card from "../../../../../reusable-ui/Card";
import { formatPrice } from "./../../../../../../utils/maths";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT } from "./../../../../../../enums/product";
import { DEFAULT_IMAGE } from "./../../imageDefault";

function Menu() {
  const {
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    productSelected,
    setproductSelected,
    setTabSelected,
    setIsCollasped,
    // titleEditRef,
    setHasAlreadyBeenClicked,
  } = useContext(PanelContext);
  //state

  //comportement
  const handleClick = async (idProductSelected) => {
    if (!isModeAdmin) return;
    await setIsCollasped(false);
    await setTabSelected("edit");
    const productClicked = menu.find(
      (product) => product.id === idProductSelected
    );
    // await titleEditRef.current.focus(); //@FIXME
    setproductSelected(productClicked);
    setHasAlreadyBeenClicked(true);
  };

  const handleCardOnDelete = (e, idProductDelete) => {
    handleDelete(idProductDelete);
    setHasAlreadyBeenClicked(false);
    setproductSelected(EMPTY_PRODUCT);
  };

  //affichage
  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          title={title}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          priceInfo={formatPrice(price)}
          hasDeleteButton={isModeAdmin}
          onDelete={(e) => handleCardOnDelete(e, id)}
          onClick={() => handleClick(id)}
          isHoverable={isModeAdmin}
          isSelected={checkIfProductIsClicked(id, productSelected.id)}
          onCardDelete={handleCardOnDelete}
          // onCardButton={(event) => handleAddBasket(event, id)}
          productId={id}
        />
      ))}
    </MenuStyled>
  );
}

export default Menu;

const MenuStyled = styled.div`
  background: $(theme.colors.background_white);
  display: grid;

  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  overflow-y: scroll;
`;
