import styled from "styled-components";

export default function Product({ title, imageSource, price }) {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="description">
          <div className="title">{title}</div>
          <div className="price">{price}</div>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  background: red;
  width: 240px;
  height: 330px;

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

  .description {
    border: 3px solid pink;
  }
`;
