import { useContext } from "react";
import PanelContext from "../../../context/OrderContext";
import styled from "styled-components";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "./../../../../utils/maths";

const DEFAULT_IMAGE = "/images/coming-soon.png";

function Menu() {
  const { menu, isModeAdmin, handleDelete, resetMenu } =
    useContext(PanelContext);
  //state

  //comportement

  //affichage
  if (menu.length === 0)
    return (
      <div>
        <span>Pas de produit</span>
        <button onClick={resetMenu}>Remettre des produits</button>
      </div>
    );
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
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  overflow-y: scroll;
`;
