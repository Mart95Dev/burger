import styled from "styled-components";
import { useContext } from "react";
import PanelContext from "../../../../context/OrderContext";
import AddForm from "./FormAdmin/AddForm";
import EditForm from "./FormAdmin/EditForm";

function PanelEditTabs() {
  //state
  const { tabSelected } = useContext(PanelContext);
  //comportement

  //display
  return (
    <>
      <PanelEditStyled>
        <div>{tabSelected === "add" ? <AddForm /> : ""}</div>
        <div>{tabSelected === "edit" ? <EditForm /> : ""}</div>
      </PanelEditStyled>
    </>
  );
}

export default PanelEditTabs;

const PanelEditStyled = styled.div`
  /* grid-column-start: 2; */ //désactiver pour le panel

  background: #ffffff;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
  right: 0;
  left: 0;
  height: 250px;
  padding-top: 17px;
  padding-left: 21px;
  display: flex;
  justify-content: start;
`;
