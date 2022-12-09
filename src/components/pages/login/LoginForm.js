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

  h1,
  h2 {
    font-family: "Amatic SC", cursive;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
    margin: 10px 0;
  }

  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
    margin: 20px 10px 10px;
  }

  .icon {
    font-size: ${theme.fonts.size.P0};
    margin-right: ${theme.spacing.xs};
    color: ${theme.colors.greySemiDark};
  }

  .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    margin-left: 10px;
  }
`;
