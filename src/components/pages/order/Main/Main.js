import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "../Main/Menu";
import Basket from "./Basket";
import PanelAdmin from "./Panel/PanelAdmin";

export default function Main() {
  return (
    <MainStyled>
      <Basket />
      <Menu />
      <PanelAdmin />
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
  overflow-x: hidden;
`;
