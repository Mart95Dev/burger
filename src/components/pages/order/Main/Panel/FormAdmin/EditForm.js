import { useContext } from "react";
import HintMessage from "./../menu/HintMessage";
import PanelContext from "../../../../../context/OrderContext";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "./../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";

export default function EditForm() {
  //this.state.

  const {
    productSelected,
    setproductSelected,
    handleEdit,
    // titleEditRef,
    hasAlreadyBeenClicked,
  } = useContext(PanelContext);
  const inputTexts = getInputTextsConfig(productSelected);

  //comportement
  const handleChange = async (e) => {
    const { name, value } = e.target;
    const productBeingUpdated = { ...productSelected, [name]: value };
    await setproductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated);
  };

  return (
    <EditFormStyled>
      {hasAlreadyBeenClicked ? (
        <>
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
                // ref={input.name === "title" ? titleEditRef : null}
              />
            ))}
          </div>
          <div className="submit"></div>
        </>
      ) : (
        <HintMessage />
      )}
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
