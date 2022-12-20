import React from "react";
//import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import PanelContext from "../../../../../context/PanelContext";

function PanelAdmin() {
  // //state
  // const [heightPanelAdmin, setHeightPanelAdmin] = useState(0);
  const { isModeAdmin } = useContext(PanelContext);
  console.log("panel: " + isModeAdmin);

  //comportement
  // const test = isModeAdmin ? "red" : "blue";

  //display
  return (
    <PanelStyled contextPanel={isModeAdmin}>
      <div className="container-tabs">
        <div>Réduire / ouvrir</div>
        <div>Ajouter un produit</div>
        <div>Modifier un produit</div>
      </div>
    </PanelStyled>
  );
}

export default PanelAdmin;

const PanelStyled = styled.div`
  display: ${(props) => (props.contextPanel ? "block" : "none")};
  position: absolute;
  overflow: hidden;
  background: yellow;
  height: 250px;
  z-index: 5;
  left: 24.6%;
  bottom: 0;
  right: 0;
  width: 74.2%;

  .container-tabs {
    display: flex;
    justify-content: space-between;
  }
`;
