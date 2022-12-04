import React from "react";
import styled from "styled-components";

export default function Main() {
  return <MainStyled>Main</MainStyled>;
}

const MainStyled = styled.div`
  text-align: center;
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  height: 75vh;
`;
