import { useState, useContext } from "react";
import styled from "styled-components";
import PanelContext from "../../../../../context/OrderContext";
import { FiCheck } from "react-icons/fi";
// import { FaHamburger } from "react-icons/fa";
// import { BsFillCameraFill } from "react-icons/bs";
// import { MdOutlineEuro } from "react-icons/md";
import { theme } from "./../../../../../../theme/index";

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
  const [isSubmitted, setIsSubmitted] = useState(false);

  //comportement
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const displayMessageSuccess = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(newProductToAdd);

    setNewProduct(EMPTY_PRODUCT);
    displayMessageSuccess();
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div className="empty-image">Aucune image</div>
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
      <div className="submit">
        <button className="submit-button">Ajouter un produit</button>
        {isSubmitted ? (
          <span className="submit-message">
            <FiCheck /> Ajouté avec succès !
          </span>
        ) : (
          ""
        )}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .image-preview {
    /* background: blue; */
    grid-area: 1/1/4/2;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    .empty-image {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
    }
  }

  .inputs-fields {
    background: orange;
    grid-area: 1/2/4/3;

    display: grid;
  }

  .submit {
    background: green;
    grid-area: 4/2/5/3;
    display: flex;
    align-items: center;

    .submit-button {
      width: 50%;
    }

    .submit-message {
      border: 1px solid red;
    }
  }
`;
