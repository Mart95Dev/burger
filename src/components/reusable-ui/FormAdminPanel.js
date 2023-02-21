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
        <div className="">
          <TextInput
            className="text-inputs"
            value={name}
            onChange={handleChange}
            type="text"
            placeholder={"Nom du produit"}
            required
            Icon={<FaHamburger className="icon color-icon" />}
          />

          <TextInput
            value={name}
            onChange={handleChange}
            type="text"
            placeholder={"Lien URL d'une image (ex: https//photo-frites.jpg)"}
            required
            Icon={<MdPhotoCamera className="icon" />}
          />

          <TextInput
            value={name}
            onChange={handleChange}
            type="text"
            placeholder={"Prix"}
            required
            Icon={<MdEuro className="icon" />}
          />

          <TextInput
            value={name}
            onChange={handleChange}
            type="text"
            placeholder={"Stock"}
            required
            Icon={<BsBoxSeam className="icon" />}
          />

          <TextInput
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

      border-radius: ${theme.borderRadius.round};
      line-height: 1.5px;
    }

    .image {
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text-inputs {
      background-color: ${theme.colors.background_white};
      color: ${theme.colors.greyLight};
    }

    .color-icon {
      color: ${theme.colors.greyBlue};
    }
  }
`;
