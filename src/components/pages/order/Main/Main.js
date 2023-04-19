import { useContext } from "react";
import PanelContext from "../../../context/OrderContext";
import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "./Panel/menu/Menu";
import Basket from "./Basket";

import Admin from "./Panel/Admin";

export default function Main() {
  const { isModeAdmin } = useContext(PanelContext);

  return (
    <MainStyled>
      <Basket />
      <Menu />
      {isModeAdmin ? <Admin /> : ""}
    </MainStyled>
  );
}

const MainStyled = styled.div`
  position: relative;
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  display: grid;
  grid-template-columns: 25% 1fr;
  /* grid-template-columns: 1fr; */
  overflow-x: hidden;
  overflow: hidden;
`;
