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
        <div class="product">
          <div className="image">
            <img src={product.imageSource} alt={product.title} />
          </div>
          <div className="info-text">
            <div className="title">{product.title}</div>
            <div className="description">
              <div className="price">{product.price}</div>
              <button className="add-button">Ajouter</button>
            </div>
          </div>
        </div>
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

  .product {
    background: red;
    width: 240px;
    height: 330px;
  }

  .image {
    border: 3px solid pink;
    height: 100px;
    width: 100px;
    img {
      width: 100%;
      heigth: 100%;
    }
  }

  .info-text {
  }
`;
