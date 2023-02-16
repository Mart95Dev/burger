import { useContext } from "react";
import PanelContext from "../../../../context/OrderContext";
import styled from "styled-components";
import PanelTabs from "./PanelTabs";
import PanelEditTabs from "./PanelEditTabs";

function Admin() {
  //state
  const { isCollasped } = useContext(PanelContext);

  // console.log("tabIconSelected" + !tabIconSelected);
  // console.log("isCollasped" + isCollasped);

  return (
    <AdminStyled>
      <PanelTabs />
      {!isCollasped ? <PanelEditTabs /> : ""}
    </AdminStyled>
  );
}

export default Admin;

const AdminStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
