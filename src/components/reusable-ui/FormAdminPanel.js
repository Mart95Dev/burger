import { useState, useContext } from "react";
import styled from "styled-components";
import { theme } from "./../../theme/index";
import TextInput from "./TextInput";
import InputSelect from "./../pages/order/Main/Panel/InputSelect";
import ImageForm from "./../pages/order/Main/Panel/adminForm/ImageForm";
import SubmitForm from "./../pages/order/Main/Panel/adminForm/SubmitForm";
import PanelContext from "../context/OrderContext";
import {
  configTextInput,
  configSelectInput,
} from "../../components/pages/order/Main/Panel/adminForm/configForm.js";

function FormAdminPanel() {
  //state
  const { fakeProducts, setFakeProducts } = useContext(PanelContext);

  const inputText = configTextInput;
  const selectInput = configSelectInput;
  const [title, setTitle] = useState(null);
  const [imagePath, setImagePath] = useState(false);
  const [price, setPrice] = useState(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const [isAdvertised, setIsAdvertised] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const inputStyle = {
    outline: "none",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "imageSource":
        setImagePath(value);
        break;
      case "price":
        setPrice(Number(value));
        break;
      default:
        break;
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    if (name === "isAvailable") {
      setIsAvailable(value);
    } else if (name === "isAdvertised") {
      setIsAdvertised(value);
    }
  };

  const resetForm = (e) => {
    setTitle("");
    setPrice("");
    setImagePath("");
    setIsAvailable(true);
    setIsAdvertised(false);
    e.target.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const addProduct = {
      id: fakeProducts.length + 1,
      imageSource: imagePath,
      title: title,
      price: price,
      quantity: 0,
      isAvailable: isAvailable,
      isAdvertised: isAdvertised,
    };
    JSON.stringify(addProduct);
    setFakeProducts([addProduct, ...fakeProducts]);

    resetForm(e);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 2000);
  };

  return (
    <FormAdminPanelStyled>
      <form onSubmit={handleSubmit} className="form-admin-panel">
        <ImageForm image={imagePath} alt={title} />
        <div className="grid-inputs">
          {inputText.map((item) => (
            <TextInput
              key={item.name}
              name={item.name}
              Icon={item.Icon}
              placeholder={item.placeholder}
              className={item.className}
              inputText={inputStyle}
              type={item.type}
              onChange={handleChange}
            />
          ))}

          {selectInput.map((item) => (
            <InputSelect
              key={item.name}
              name={item.name}
              Icon={item.Icon}
              onChange={handleSelectChange}
              className={item.className}
              option_1={item.option_1}
              option_2={item.option_2}
            />
          ))}
          <SubmitForm
            className="grid-button"
            label={"Ajouter un nouveau produit au menu"}
            formSubmitted={formSubmitted}
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
      ". button ";

    gap: 8px 20px;
    width: 70%;
    margin: auto 0px;
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
      "price stock advertise";

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
    .grid-advertise {
      grid-area: advertise;
    }

    .color-icon {
      color: ${theme.colors.greyBlue};
      font-size: 18px;
    }
  }
`;
