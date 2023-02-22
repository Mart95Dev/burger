import { useState } from "react";
import styled from "styled-components";
import { theme } from "./../../theme/index";
import TextInput from "./TextInput";
import { FaHamburger } from "react-icons/fa";
import { MdPhotoCamera, MdEuro } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { GoMegaphone } from "react-icons/go";
import PrimaryButton from "./PrimaryButton";

function FormAdminPanel() {
  //state
  const inputStyle = {
    outline: "none",
  };
  const [name, setName] = useState(""); // mettre context en fonction input
  const handleChange = (e) => {
    setName(e.target.value); // modifier le state de la value de input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(""); // modifier le state de la value de input
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
          <TextInput
            className="text-inputs grid-input-first-row"
            inputText={inputStyle}
            value={name}
            onChange={handleChange}
            type="text"
            placeholder={"Nom du produit"}
            required
            Icon={<FaHamburger className="icon color-icon" />}
          />

          <TextInput
            className="text-inputs grid-input-second-row"
            inputText={inputStyle}
            value={name}
            onChange={handleChange}
            type="text"
            placeholder={"Lien URL d'une image (ex: https//photo-frites.jpg)"}
            required
            Icon={<MdPhotoCamera className="icon color-icon" />}
          />

          <TextInput
            className="text-inputs grid-price"
            inputText={inputStyle}
            value={name}
            onChange={handleChange}
            type="text"
            placeholder={"Prix"}
            required
            Icon={<MdEuro className="icon color-icon" />}
          />

          <TextInput
            className="text-inputs grid-stock"
            value={name}
            onChange={handleChange}
            type="text"
            placeholder={"Stock"}
            required
            Icon={<BsBoxSeam className="icon color-icon" />}
          />

          <TextInput
            className="text-inputs grid-pub"
            value={name}
            onChange={handleChange}
            type="text"
            placeholder={"Pub"}
            required
            Icon={<GoMegaphone className="icon color-icon" />}
          />
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
    height: 90%;
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
      /* color: ${theme.colors.greyLight}; */
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
