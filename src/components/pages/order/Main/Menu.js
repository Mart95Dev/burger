import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../api/fakeData/fakeMenu";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "./../../../../utils/maths";

function Menu() {
  //state
  const [menu, setMenu] = useState(fakeMenu2);

  //comportement

  //affichage
  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Card
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
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  overflow-y: scroll;
`;
