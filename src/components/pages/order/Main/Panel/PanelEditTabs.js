import styled from "styled-components";
import { useContext } from "react";
import PanelContext from "../../../../context/OrderContext";

import AddForm from "./FormAdmin/AddForm";
import EditForm from "./FormAdmin/EditForm";
import { theme } from "./../../../../../theme/index";

function PanelEditTabs() {
  //state
  const { tabSelected } = useContext(PanelContext);
  //comportement

  //display
  return (
    <PanelEditStyled>
      {tabSelected === "add" ? <AddForm /> : ""}
      {tabSelected === "edit" ? <EditForm /> : ""}
    </PanelEditStyled>
  );
}

export default PanelEditTabs;

const PanelEditStyled = styled.div`
  /* grid-column-start: 2; //désactiver pour le panel */

  background: #ffffff;
  box-shadow: ${theme.shadows.medium};
  right: 0;
  left: 0;
  height: 250px;

  padding: 30px 5px 30px 70px;
`;
