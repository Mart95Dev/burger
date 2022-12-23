import React from "react";
// import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import PanelContext from "../../../../../context/PanelContext";
// import { IoMdArrowDropdownCircle } from "react-icons/io";
// import { IoMdArrowDropupCircle } from "react-icons/io";

function PanelAdmin() {
  // //state
  // const [checked, setChecked] = useState(true);
  const { isModeAdmin } = useContext(PanelContext);

  //comportement

  //display
  return (
    <PanelStyled contextPanel={isModeAdmin}>
      <div className="container-tabs">
        <div className="tabs icon-open-close">open-close</div>
        <div className="tabs add-product">Ajouter un produit</div>
        <div className="tabs update-product">Modifier un produit</div>
      </div>
      <div className="content-content-tab add-product">
        <p>Ajouter produit</p>
      </div>
      <div className="content-content-tab update-product">
        <p>Modifier produit</p>
      </div>
    </PanelStyled>
  );
}

export default PanelAdmin;

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

  .container-tabs {
    background: white;
    display: flex;
    align-items: center;
    padding: 0px;
    position: absolute;
    top: -37px;
    height: 40px;
    left: 45px;
  }

  .tabs {
    background: white;
    margin-left: 1px;
    border: 1px solid #e4e5e9;
    /* border-bottom: none; */
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 5px 10px;
  }

  .content-content-tab {
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;
