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
  border: 4px solid red;
`;
