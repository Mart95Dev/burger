import { useState } from "react";
import PanelContext from "../../../../context/OrderContext";
import styled from "styled-components/macro";
import { theme } from "./../../../../../theme/index";

function Tab({ icon, label }) {
  //display
  return (
    <>
      <TabStyled>
        <div className="icon">{icon}</div>
        <span className="label"> {label}</span>
      </TabStyled>
    </>
  );
}

export default Tab;

const TabStyled = styled.button`
  /* grid-column-start: 2; */ //désactiver pour le panel

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  padding: 0px 22px;
  height: 43px;

  position: relative;
  left: 5%;

  font-size: 16px;
  background: #ffffff;

  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: #e4e5e9;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 0px 0px;
  color: #93a2b1;

  .icon {
    display: flex;
  }

  .label {
    margin-left: 13px;
  }

  :hover {
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
  }
`;
