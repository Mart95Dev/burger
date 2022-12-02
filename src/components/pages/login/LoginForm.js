import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "./../../reusable-ui/PrimaryButton";

function LoginForm() {
  //state
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    navigate(`order/${name}`);
  };
  return (
    <>
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
        <TextInput
          value={name}
          onChange={handleChange}
          type="text"
          placeholder={"Entrer votre prénom"}
          required
          Icon={<BsPersonCircle className="icon" />}
        />
        <PrimaryButton
          label={"Accèder à mon"}
          Icon={<IoChevronForward className="icon-button" />}
        />
      </LoginFormStyled>
    </>
  );
}

export default LoginForm;

const LoginFormStyled = styled.form`
  background: ${theme.colors.green};
  text-align: center;
  padding: 2.5rem 2rem;
  margin: 0 auto;
  max-width: 500px;
  min-width: 400px;
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
    margin: 26px 0;
  }

  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
    margin: 20px 10px 10px;
  }

  .input-with-icon {
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px opx; // could be handle in parent too

    .icon {
      font-size: ${theme.fonts.P0};
      margin-right: ${theme.spacing.xs};
      color: ${theme.colors.greySemiDark};
    }

    input {
      border: none;
      font-size: ${theme.fonts.P0};
      color: ${theme.colors.dark};
      width: 100%;
    }

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyLight};
    }
  }

  .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.P0};
    margin-left: 10px;
  }
`;
