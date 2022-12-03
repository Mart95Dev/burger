import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

// import { theme } from "./../../../theme/index";

export default function OrderPage() {
  //state
  const { username } = useParams();

  //comortements

  //affichage
  return (
    <ContainerStyled>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ff9f1a;
  overflow: hidden;
`;
