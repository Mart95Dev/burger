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
`;

const ContainerStyled = styled.div`
  width: 98%;
  margin-left: auto;
  margin-right: auto;
`;
