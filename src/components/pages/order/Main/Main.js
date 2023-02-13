import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "../Main/Menu";
// import Basket from "./Basket";
import Admin from "./Panel/Admin";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> désactiver pour la mise en place du panel */}
      <Menu />
      <Admin />
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
  /* grid-template-columns: 25% 1fr; désactiver pour la mise en place du panel */
  grid-template-columns: 1fr;
  overflow-x: hidden;
  overflow: hidden;
`;
