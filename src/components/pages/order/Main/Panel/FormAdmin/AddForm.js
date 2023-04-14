import { useState, useContext } from "react";
import styled from "styled-components";
import PanelContext from "../../../../../context/OrderContext";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  //this.state.
  const { handleAdd } = useContext(PanelContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  //comportement
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(newProductToAdd);

    setNewProduct(EMPTY_PRODUCT);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div>Aucune image</div>
        )}
      </div>
      <div className="inputs-fields">
        <input
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          onChange={handleChange}
        />
        <input
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          onChange={handleChange}
        />
        <input
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="number"
          placeholder="Prix"
          onChange={handleChange}
        />
      </div>
      <button className="submit-button">Ajouter un produit</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 2px solid red;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-preview {
    background: blue;
    grid-area: 1/1/4/2;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .inputs-fields {
    background: orange;
    grid-area: 1/2/4/3;

    display: grid;
  }

  .submit-button {
    background: green;
    grid-area: 4/2/5/3;

    width: 50%;
  }
`;
