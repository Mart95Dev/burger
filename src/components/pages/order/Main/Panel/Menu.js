import { useContext } from "react";
import styled from "styled-components";
import PanelContext from "../../../../context/OrderContext";
import Card from "../../../../reusable-ui/Card";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

function Menu() {
  const { menu, isModeAdmin, handleDelete, resetMenu } =
    useContext(PanelContext);
  // state

  // comportements
  // const handleClick = () => {
  //   return console.log("coucou");
  // };

  const test = "coucou";

  // affichage
  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  //affichage
  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDelete(id)}
            // onClick={handleClick}
          />
        );
      })}
      <span>coucou</span>
    </MenuStyled>
  );
}

export default Menu;

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
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
