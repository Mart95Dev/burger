import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../api/fakeData/fakeMenu";

function Menu() {
  //state
  const [products, setProducts] = useState(fakeMenu2);

  //comportement

  //affichage
  return (
    <MenuStyled>
      {products.map((product) => (
        <div>{product.title}</div>
      ))}
    </MenuStyled>
  );
}

export default Menu;

const MenuStyled = styled.div`
  background: red;
`;
