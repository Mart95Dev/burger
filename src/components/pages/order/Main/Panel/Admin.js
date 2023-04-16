import { useContext } from "react";
import PanelContext from "../../../../context/OrderContext";
import styled from "styled-components";
import PanelTabs from "./PanelTabs";
import PanelEditTabs from "./PanelEditTabs";

function Admin() {
  //state
  const { isCollasped } = useContext(PanelContext);

  return (
    <AdminStyled>
      <PanelTabs />
      {!isCollasped ? <PanelEditTabs /> : ""}
    </AdminStyled>
  );
}

export default Admin;

const AdminStyled = styled.div`
  display: grid;
  grid-column-start: 2;
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
`;
