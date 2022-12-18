import React from "react";
import styled from "styled-components";
// import PanelContext from "../../../../context/PanelContex";
// import { useContext } from "react";

function PanelAdmin() {
  // //state
  // const { isModeAdmin } = useContext(PanelContext);

  //comportement

  return (
    <PanelStyled>
      <div>
        <div className="container-tabs">
          <div>Réduire / ouvrir</div>
          <div>Ajouter un produit</div>
          <div>Modifier un produit</div>
        </div>
      </div>
    </PanelStyled>
  );
}

export default PanelAdmin;

const PanelStyled = styled.div`
  position: absolute;
  background: yellow;
  z-index: 5;
  height: 250px;
  left: 24.6%;
  bottom: 0;
  right: 1.3%;

  .container-tabs {
    display: flex;
    justify-content: space-between;
  }
`;
