import { useContext } from "react";
import styled from "styled-components";
import PanelContext from "../../../../context/OrderContext";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";

function Menu() {
  //state
  const { fakeMenus } = useContext(PanelContext);

  //comportement

  //affichage
  return (
    <MenuStyled>
      {fakeMenus.map(({ id, title, imageSource, price }) => (
        <Card
          className="card-mode-admin-panel"
          key={id}
          title={title}
          imageSource={imageSource}
          leftDescription={formatPrice(price)}
        />
      ))}
    </MenuStyled>
  );
}

export default Menu;

const MenuStyled = styled.div`
  background: $(theme.colors.background_white);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  overflow-y: scroll;

  .card-mode-admin-panel:hover {
    transform: scale(1.05);
    box-shadow: rgb(255 154 35) 0px 0px 8px 0px;
    animation: scale 500ms ease-in-out 0s 1 normal;
  }

  @keyframes scale {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.05);
    }
  }
`;
