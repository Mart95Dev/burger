import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import PanelContext from "../../../../../context/PanelContext";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";

function PanelAdmin() {
  // //state
  const [checked, setChecked] = useState(true);
  const [heightPanelAdmin, setHeightPanelAdmin] = useState(250);
  const [reducePanelAdmin, setReducePanelAdmin] = useState(false);
  const { isModeAdmin } = useContext(PanelContext);

  //comportement
  const iconOpenClosePanelAdmin = () => {
    if (!reducePanelAdmin) {
      setHeightPanelAdmin(50);
      setReducePanelAdmin(!reducePanelAdmin);
    } else {
      setHeightPanelAdmin(250);
      setReducePanelAdmin(!reducePanelAdmin);
    }
  };

  const addUpdateproductPanelAdmin = () => {
    setHeightPanelAdmin(250);
    setReducePanelAdmin(!reducePanelAdmin);
  };

  //display
  return (
    <PanelStyled contextPanel={isModeAdmin} height={heightPanelAdmin}>
      <button
        className="icons-open-close-panel-admin"
        onClick={iconOpenClosePanelAdmin}
      >
        {heightPanelAdmin === 250 ? (
          <IoMdArrowDropdownCircle className="icon" />
        ) : (
          <IoMdArrowDropupCircle className="icon" />
        )}
      </button>
      <div className="container-tabs ">
        <input
          type="radio"
          className="tabs__radio"
          name="tabs-example"
          id="tab1"
          defaultChecked={checked}
          onClick={addUpdateproductPanelAdmin}
        />
        <label htmlFor="tab1" className="tabs__label">
          Ajouter un produit
        </label>
        <div className="tabs__content">
          <p>Ajouter produit</p>
        </div>
        <input
          type="radio"
          className="tabs__radio"
          name="tabs-example"
          id="tab2"
          onClick={addUpdateproductPanelAdmin}
        />
        <label htmlFor="tab2" className="tabs__label">
          Modifier un produit
        </label>
        <div className="tabs__content">Modifier produit</div>
      </div>
    </PanelStyled>
  );
}

export default PanelAdmin;

const PanelStyled = styled.div`
  display: grid;
  grid-template-columns: 7% 1fr;
  position: absolute;
  overflow: hidden;
  background: white;
  border: 1px solid #dddddd;
  height: ${(props) => (props.contextPanel ? props.height : "0")}px;  
  z-index: 5;
  left: 24.6%;
  bottom: 0;
  right: 0;
  width: 74.2%;
  animation: ${(props) =>
    props.contextPanel ? "1s slidein " : "1s slideout "};   
 
   
  @keyframes slidein {
    from {
      height: 0px;
    }

    to {
      height: 250px;
    }
  }

  @keyframes slideout {
    from {
      height: 250px;
    }

    to {
      height: 0px;
    }
  }

  .container-tabs {
    grid-column-start: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px 20px;
    width: 100%;
    height: 60px;
  }
 
   .icons-open-close-panel-admin {
      grid-column-start: 1;
      display: flex;
      justify-content: center;
      align-items: start;
      padding: 10px;
      border: none;
      background: transparent;
      font-size: 2.0em;
      background: #6f737e;
      height: 50px;
      cursor: pointer;
    }

    .icon {
      color: #ffa01b;
    }

    .tabs {
      display: flex;
      flex-wrap: wrap;
      max-width: 400px;
      font-family: sans-serif;
    }

    .tabs__label {
      padding: 10px 16px;
      cursor: pointer;
    }

    .icons {
      font-size: 1.8em;
    }

    .tabs__radio {
      display: none;
    }

    .tabs__content {
      order: 1;
      width: 100%;
      line-height: 1.5;
      font-size: 0.9em;
      display: none;
      border-top: 1px solid #ffa01b;
      transhtmlform: scaleX(100%);
      font-size: initial;
    }

    .tabs__radio:checked + .tabs__label {
      background: #ffa01b;
      color: #fff;
      border-bottom: 1px solid #ffa01b;
    }

    .tabs__radio:checked + .tabs__label + .tabs__content {
      display: initial;
    }
  }
`;
