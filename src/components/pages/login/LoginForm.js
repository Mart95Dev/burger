import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "./../../reusable-ui/Button";

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
          type="text"
          placeholder={"Entrez votre prénom"}
          value={name}
          onChange={handleChange}
          Icon={<BsPersonCircle className="icon" />}
          className="input-login"
          required
          version="normal"
        />
        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className="icon-button" />}
        />
      </LoginFormStyled>
    </>

  );
}

export default LoginForm;

const LoginFormStyled = styled.form`
  text-align: center;
  padding: 40px ${theme.spacing.lg};
  margin: 0px auto;
  max-width: 500px;
  min-width: 400px;
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    margin-top: ${theme.gridUnit * 3}px;
    margin-bottom: ${theme.gridUnit * 4}px;
    border: 1.5px solid ${theme.colors.loginLine};
    width: 102%;
  }

  h1 {
    margin-top: ${theme.gridUnit * 5}px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin-left: 10px;
  }


  .input-login {
    margin: 18px 0; // must be handled in Parent

`;
