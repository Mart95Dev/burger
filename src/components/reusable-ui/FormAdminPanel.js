import { useContext } from "react";
import styled from "styled-components";
import { theme } from "./../../theme/index";
import TextInput from "./TextInput";
import PrimaryButton from "./PrimaryButton";
import InputSelect from "./../pages/order/Main/Panel/InputSelect";
import formAdminPanelContext from "../context/AdminContext";
import {
  configTextInput,
  configSelectInput,
} from "../../components/pages/order/Main/Panel/configForm";

function FormAdminPanel() {
  //state
  const inputText = configTextInput;
  const selectInput = configSelectInput;

  const {
    nameProduct,
    url,
    price,
    isAvailable,
    isAdvertised,
    setNameProduct,
    setUrl,
    setPrice,
    setIsAdvertised,
    setIsAvailable,
  } = useContext(formAdminPanelContext);

  const inputStyle = {
    outline: "none",
  };

  const valueInput = (item) => {
    switch (item) {
      case "nameProduct":
        item = { nameProduct };
        break;
      case "url":
        item = { url };
        break;
      case "price":
        item = { price };
        break;
      default:
        item = "";
        break;
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    switch (name) {
      case "title-product":
        setNameProduct(value);
        break;
      case "imageSrc":
        setUrl(value);
        break;
      case "price":
        setPrice(value);
        break;
      default:
        name = "";
        break;
    }
  };

  const handleSelectChange = (e) => {
    let valueSelect = e.target.value;
    let nameSelectId = e.target.id;
    if (nameSelectId === "stock") {
      return setIsAdvertised(valueSelect);
    }
    if (nameSelectId === "pub") {
      return setIsAdvertised(valueSelect);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameProduct("");
    setUrl("");
    setPrice("");
  };

  return (
    <FormAdminPanelStyled>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="form-admin-panel"
      >
        <div className="preview-image">
          <div className="image">Aucune image</div>
        </div>
        <div className="grid-inputs">
          {inputText.map((item) => (
            <TextInput
              key={item.id}
              id={item.id}
              name={item.name}
              Icon={item.Icon}
              placeholder={item.placeholder}
              value={valueInput(item.value)}
              className={item.className}
              inputText={inputStyle}
              type="text"
              onChange={handleChange}
              required
            />
          ))}

          {selectInput.map((item) => (
            <InputSelect
              key={item.id}
              id={item.id}
              name={item.name}
              Icon={item.Icon}
              onChange={handleSelectChange}
              className={item.className}
              option_1={item.option_1}
              option_2={item.option_2}
            />
          ))}

          <PrimaryButton
            className="grid-button add-product-menu"
            label={"Ajouter un nouveau produit au menu"}
          />
        </div>
      </form>
    </FormAdminPanelStyled>
  );
}

export default FormAdminPanel;

const FormAdminPanelStyled = styled.div`
  padding: 20px 30px 20px 60px;
  display: flex;
  align-items: flex-start;
  color: ${theme.colors.greyDark};
  font-size: ${theme.fonts.size.P1};

  .form-admin-panel {
    justify-content: start;
    align-self: start;
    display: grid;
    grid-template-columns: 20% 1fr;
    grid-template-rows: 70% 1fr;
    grid-template-areas:
      "image inputs"
      ". button";

    gap: 8px 20px;
    width: 70%;
    margin: auto 0px;
  }

  .preview-image {
    border: 1px solid ${theme.colors.greyLight};
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: ${theme.borderRadius.round};
    line-height: 1.5px;

    .image {
      grid-area: image;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fonts.size.P0};
    }
  }

  .grid-button {
    grid-area: button;
    grid-column: span 2;
  }

  .grid-inputs {
    grid-area: inputs;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "product product product"
      "url url url"
      "price stock pub";

    gap: 6px;

    .text-inputs {
      background-color: ${theme.colors.background_white};
      padding: 5px 16px;
    }

    .grid-input-first-row {
      grid-area: product;
    }
    .grid-input-second-row {
      grid-area: url;
    }
    .grid-price {
      grid-area: price;
    }
    .grid-stock {
      grid-area: stock;
    }
    .grid-pub {
      grid-area: pub;
    }

    .color-icon {
      color: ${theme.colors.greyBlue};
      font-size: 18px;
    }

    .add-product-menu {
      margin-top: 0px;
      padding: 10px;
      background-color: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};
      font-weight: ${theme.fonts.weights.semiBold};

      :hover {
        color: ${theme.colors.success};
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.success};
        transition: all 200ms ease-out;
      }

      :active {
        background-color: ${theme.colors.success};
        color: ${theme.colors.white};
      }
    }
  }
`;
