import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";

export default function OrderPage() {
  //state
  const { username } = useParams();

  //comortements

  //affichage
  return (
    <BackgroundOrderPageStyled>
      <ContainerStyled>
        <Navbar />
        <Main />
        <h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </ContainerStyled>
    </BackgroundOrderPageStyled>
  );
}

const BackgroundOrderPageStyled = styled.div`
  background-color: #ff9f1a;
  height: 100vh;
  overflow: hidden;
`;

const ContainerStyled = styled.div`
  width: 98%;
  margin-left: auto;
  margin-right: auto;
`;
