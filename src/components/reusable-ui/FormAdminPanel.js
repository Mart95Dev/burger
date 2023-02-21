import { useState } from "react";
import styled from "styled-components";
import { theme } from "./../../theme/index";
import TextInput from "./TextInput";
import { FaHamburger } from "react-icons/fa";
import { MdPhotoCamera, MdEuro } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { GoMegaphone } from "react-icons/go";

function FormAdminPanel() {
  //state
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
            value={name}
            onChange={handleChange}
            type="text"
            placeholder={"Nom du produit"}
            required
            Icon={<FaHamburger className="icon color-icon" />}
          />

          <TextInput
            className="text-inputs grid-input-second-row"
            value={name}
            onChange={handleChange}
            type="text"
            placeholder={"Lien URL d'une image (ex: https//photo-frites.jpg)"}
            required
            Icon={<MdPhotoCamera className="icon" />}
          />

          <TextInput
            className="text-inputs grid-input-third-row"
            value={name}
            onChange={handleChange}
            type="text"
            placeholder={"Prix"}
            required
            Icon={<MdEuro className="icon" />}
          />

          <TextInput
            className="text-inputs grid-input-third-row"
            value={name}
            onChange={handleChange}
            type="text"
            placeholder={"Stock"}
            required
            Icon={<BsBoxSeam className="icon" />}
          />

          <TextInput
            className="text-inputs grid-input-third-row"
            value={name}
            onChange={handleChange}
            type="text"
            placeholder={"Pub"}
            required
            Icon={<GoMegaphone className="icon" />}
          />
        </div>
      </form>
    </FormAdminPanelStyled>
  );
}

export default FormAdminPanel;

const FormAdminPanelStyled = styled.div`
  padding: 25px 30px 20px 60px;
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
    gap: 8px 20px;
    width: 70%;
    margin: auto 0px;

    .preview-image {
      border: 1px solid ${theme.colors.greyLight};
      height: 100%;
      width: 100%;
      display: flex;

      grid-area: 1/1/3/1;

      border-radius: ${theme.borderRadius.round};
      line-height: 1.5px;
    }

    .image {
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .grid-inputs {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 10px;
    }

    .text-inputs {
      background-color: ${theme.colors.background_white};
      color: ${theme.colors.greyLight};
    }

    .grid-input-first-row {
      grid-area: 1/1/2/4;
    }
    .grid-input-second-row {
      grid-area: 2/1/3/4;
    }
    .grid-input-third-row {
      grid-column: 1fr 1fr 1fr;
    }

    .color-icon {
      color: ${theme.colors.greyBlue};
    }
  }
`;
