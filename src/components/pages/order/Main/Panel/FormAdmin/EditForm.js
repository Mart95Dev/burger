import { useState, useContext } from "react";
import HintMessage from "./../menu/HintMessage";
import PanelContext from "../../../../../context/OrderContext";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "./../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
// import { EMPTY_PRODUCT } from "./../../../../../../enums/product";

export default function EditForm() {
  const { productSelected, setproductSelected, handleEdit } =
    useContext(PanelContext);
  // const [productBeingEdited, setproductBeingEdited] = useState(EMPTY_PRODUCT);
  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productBedingUpdated = { ...productSelected, [name]: value };
    setproductSelected(productBedingUpdated);
    handleEdit(productBedingUpdated);
  };

  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
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
      <div className="submit"></div>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
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

    
    }
  }
`;
