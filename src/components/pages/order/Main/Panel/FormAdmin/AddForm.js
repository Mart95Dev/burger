import { useContext } from "react";
import styled from "styled-components";
import PanelContext from "../../../../../context/OrderContext";

export default function AddForm() {
  //this.state.
  const { handleAdd } = useContext(PanelContext);

  const newProduct = {
    id: new Date().getTime(),
    title: "Nouveau produit",
    imageSource:
      "https://media.carrefour.fr/medias/96c1bbd1b5773070bd03591e7fb23b7c/p_540x540/03103220044797-a1c1-s01.jpg",
    price: 2.2,
  };

  //comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newProduct);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">image preview</div>
      <div className="inputs-fields">
        <input type="text" placeholder="Produits" />
        <input type="text" placeholder="image URL" />
        <input type="text" placeholder="Prix" />
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
