import React from "react";
import { useState, useContext } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import PanelContext from "../../../../context/OrderContext";
import styled from "styled-components/macro";
import Tab from "./Tab";

function PanelTabs() {
  return (
    <PanelTabsStyled>
      <Tab icon={<FiChevronDown />} label="" />
      <Tab icon={<AiOutlinePlus />} label="Ajouter un produit" />
      <Tab icon={<MdModeEditOutline />} label="Modifier un produit" />
    </PanelTabsStyled>
  );
}

export default PanelTabs;

const PanelTabsStyled = styled.div`
  display: flex;

  button {
    margin-left: 1px;
  }
`;
