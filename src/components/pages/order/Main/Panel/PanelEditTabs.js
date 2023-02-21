import styled from "styled-components";
import { useContext } from "react";
import PanelContext from "../../../../context/OrderContext";
import FormAdminPanel from "./../../../../reusable-ui/FormAdminPanel";
import { theme } from "./../../../../../theme/index";

function PanelEditTabs() {
  //state
  const { tabSelected } = useContext(PanelContext);
  //comportement

  //display
  return (
    <>
      <PanelEditStyled>
        <div>{tabSelected === "add" ? <FormAdminPanel /> : ""}</div>
        <div>{tabSelected === "edit" ? <FormAdminPanel /> : ""}</div>
      </PanelEditStyled>
    </>
  );
}

export default PanelEditTabs;

const PanelEditStyled = styled.div`
  /* grid-column-start: 2; */ //désactiver pour le panel

  background: #ffffff;
  box-shadow: ${theme.shadows.medium};
  right: 0;
  left: 0;
  height: 250px;
  padding-top: 17px;
  padding-left: 21px;

  /* display: flex;
  justify-content: start; */
`;
