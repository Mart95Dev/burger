import { useContext } from "react";
import PanelContext from "../../../../context/OrderContext";
import styled from "styled-components";
import PanelTabs from "./PanelTabs";
import PanelEditTabs from "./PanelEditTabs";

function Admin() {
  //state
  const { isReduce } = useContext(PanelContext);

  return (
    <AdminStyled>
      <PanelTabs />
      {!isReduce ? <PanelEditTabs /> : ""}
    </AdminStyled>
  );
}

export default Admin;

const AdminStyled = styled.div`
  border: 2px solid red;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
