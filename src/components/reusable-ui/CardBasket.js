import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { MdDeleteForever } from "react-icons/md";

export default function CardBasket({
  title,
  imageSource,
  priceInfo,
  quantity,
  onDeleteBasket,
  isSelected,
  isModeAdminActived,
}) {
  // comportements (vide)
  console.log(isModeAdminActived);
  // affichage
  return (
    <CardBasketStyled
      isModeAdminActived={isModeAdminActived}
      isSelected={isSelected}
      style={isSelected ? { background: "orange" } : { background: "blue" }}
    >
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <p className="title">{title}</p>
        <div className="price">{priceInfo}</div>
      </div>
      <div className="right-description" onClick={onDeleteBasket}>
        <MdDeleteForever className="icon-delete" />
        <p className="quantity">X{quantity}</p>
      </div>
    </CardBasketStyled>
  );
}

const CardBasketStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.2);
  width: 318px;
  height: 86px;
  margin-top: 20px;
  overflow: hidden;
  box-sizing: content-box;
  display: grid;
  grid-template-columns: 30% 46% 24%;

  :hover {
    /* cursor: pointer; */
    cursor: ${({ isModeAdminActived }) =>
      isModeAdminActived ? "pointer" : "default"};

    .right-description {
      background: red;

      .quantity {
        display: none;
      }
      .icon-delete {
        display: block;
      }
    }
  }

  .image {
    grid-column-start: 1;
    width: 100%;
    height: 100%;
    padding: 8px 0px 8px 10px;

    img {
      width: 86px;
      height: 70px;
      object-fit: contain;
    }
  }

  .text-info {
    grid-column-start: 2;
    width: 150%;
    display: grid;
    justify-content: start;
    padding-left: 20px;
    grid-template-rows: 1fr 1fr;

    .title {
      display: grid;
      justify-content: start;
      align-content: end;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: ${theme.fonts.size.P3};
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      font-family: "Amatic SC", cursive;
    }

    .price {
      display: grid;
      justify-content: start;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: ${theme.fonts.weights.medium};
      font-weight: ${theme.fonts.weights.medium};
      color: ${theme.colors.primary};
    }
  }

  .right-description {
    grid-column-start: 3;
    display: grid;
    justify-content: center;
    align-content: center;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.primary};

    .icon-delete {
      display: none;
      color: white;
      width: 20px;
      height: 18px;
    }

    :hover {
      .icon-delete {
        color: black;      
      }
    }

    :active {
      .icon-delete {
        color: white;      
      }
    }

    /* ${({ isSelected }) => isSelected && selectedStyle} */
`;

const selectedStyle = css`
  background: ${theme.colors.primary};
`;
