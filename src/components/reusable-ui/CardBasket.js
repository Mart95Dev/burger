import styled from "styled-components";
import { theme } from "../../theme";
// import Button from "./Button";
// import { TiDelete } from "react-icons/ti";

export default function CardBasket({ title, imageSource, priceInfo }) {
  // state (vide)

  // comportements (vide)

  // affichage
  return (
    <CardBasketStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        {/*title */}
        <div className="title">{title}</div>
        {/* price*/}
        <div className="price">{priceInfo}</div>
      </div>
      <div className="right-description">
        <p>X1</p>
      </div>
    </CardBasketStyled>
  );
}

const CardBasketStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 86px;
  margin-top: 20px;

  display: grid;
  grid-template-columns: 30% 1fr 30%;

  .image {
  }

  .text-info {
  }

  .right-description {
  }
`;
