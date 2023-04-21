import styled from "styled-components";
import Button from "./../../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextConfig";
import TextInput from "./../../../../../reusable-ui/TextInput";

export default function Form({ onSubmit, onChange, product, isSubmitted }) {
  //this.state.

  //comportement

  const inputTexts = getInputTextsConfig(product);

  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview imageSource={product.imageSource} title={product.title} />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={onChange}
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
    </FormStyled>
  );
}

const FormStyled = styled.form`
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
