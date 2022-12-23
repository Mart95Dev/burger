import styled from "styled-components";
import { useContext } from "react";
import PanelContext from "../../../../../context/PanelContext";

function ContainerContentTabsAdmin({ toggleTabs }) {
  //state
  const { isModeAdmin } = useContext(PanelContext);

  //display
  return (
    <>
      <PanelStyled contextPanel={isModeAdmin}>
        <div
          className={
            toggleTabs === 1 ? "content-tab active-content-tab" : "content-tab"
          }
        >
          <p>Ajouter produit</p>
        </div>
        <div
          className={
            toggleTabs === 2 ? "content-tab active-content-tab" : "content-tab"
          }
        >
          <p>Modifier produit</p>
        </div>
      </PanelStyled>
    </>
  );
}

export default ContainerContentTabsAdmin;

const PanelStyled = styled.div`
  z-index: 2;
  grid-column-start: 2;
  background: white;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 250px;
  padding: 30px;
  border: 1px solid #e4e5e9;

  .content-tab {
    display: flex;
    justify-content: start;
    align-items: center;
    display: none;
  }

  .active-content-tab {
    display: block;
  }
`;
