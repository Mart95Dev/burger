import { useState, useContext } from "react";
import styled from "styled-components";
import PanelContext from "../../../../../context/OrderContext";
// import { theme } from "./../../../../../../theme/index";
import Button from "./../../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextConfig";
import TextInput from "./../../../../../reusable-ui/TextInput";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  //this.state.
  const { handleAdd, newProduct, setNewProduct } = useContext(PanelContext);
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

  const inputTexts = getInputTextsConfig(newProduct);

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
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1/2/-2/3;

    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4/2/5/3;
    display: flex;
    align-items: center;

    .submit-button {
      width: 50%;
    }
  }
`;
