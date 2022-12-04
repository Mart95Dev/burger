import React from "react";

import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";

export default function OrderPage() {
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
  z-index: 999;
`;

const ContainerStyled = styled.div`
  width: 98%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
  @media screen and (min-width: 1520px) {
    max-width: 1400px;
  }
`;
