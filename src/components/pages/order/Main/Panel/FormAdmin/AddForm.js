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
    const newValue = e.target.value;
    const name = e.target.name;
    setNewProduct({ ...newProduct, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: new Date().getTime(),
    };

    handleAdd(newProductToAdd);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Aucune image</div>
      <div className="inputs-fields">
        <input
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Produits"
          onChange={handleChange}
        />
        <input
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="image URL"
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
  /* width: 100%; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-preview {
    background: blue;
    grid-area: 1/1/4/2;
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
