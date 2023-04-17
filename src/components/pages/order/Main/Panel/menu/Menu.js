import { useContext } from "react";
import PanelContext from "../../../../../context/OrderContext";
import styled from "styled-components";
import Card from "../../../../../reusable-ui/Card";
import { formatPrice } from "./../../../../../../utils/maths";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const DEFAULT_IMAGE = "/images/coming-soon.png";

function Menu() {
  const { menu, isModeAdmin, handleDelete, resetMenu, setproductSelected } =
    useContext(PanelContext);
  //state

  //comportement
  const handleClick = (idProductSelected) => {
    const productSelected = menu.find(
      (product) => product.id === idProductSelected
    );
    setproductSelected(productSelected);
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
          leftDescription={formatPrice(price)}
          hasDeleteButton={isModeAdmin}
          onDelete={() => handleDelete(id)}
          onClick={() => handleClick(id)}
        />
      ))}
    </MenuStyled>
  );
}

export default Menu;

const MenuStyled = styled.div`
  background: $(theme.colors.background_white);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr))
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  overflow-y: scroll;
`;
