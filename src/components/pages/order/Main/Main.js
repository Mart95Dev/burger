import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme/index";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">basket</div>
      <div className="menu">menu</div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;

  display: grid;
  grid-template-columns: 25% 1fr;

  .basket {
    background: pink;
  }

  .menu {
    background: red;
  }
`;
