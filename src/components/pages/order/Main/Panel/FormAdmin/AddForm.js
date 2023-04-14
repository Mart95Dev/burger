import React from "react";
import styled from "styled-components";

export default function AddForm() {
  return (
    <AddFormStyled>
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
