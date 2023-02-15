import React from "react";
import { useContext } from "react";
import PanelContext from "../../../../context/OrderContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components/macro";
import Tab from "./Tab";
import { theme } from "./../../../../../theme/index";

function PanelTabs() {
  const { tabSelected, setTabSelected, tabIconSelected, setTabIconSelected } =
    useContext(PanelContext);

  const isTabSelected = (index) => {
    if (index === "icon") {
      setTabIconSelected(!tabIconSelected);
    }
    setTabSelected(index);
  };

  const tabActive = (index) => (tabSelected === index ? "is-active" : "");

  return (
    <PanelTabsStyled>
      <Tab
        icon={tabIconSelected ? <FiChevronUp /> : <FiChevronDown />}
        label=""
        className={tabActive("icon")}
        onClick={() => isTabSelected("icon")}
      />
      <Tab
        icon={<AiOutlinePlus />}
        label="Ajouter un produit"
        className={tabActive("add")}
        onClick={() => isTabSelected("add")}
      />
      <Tab
        icon={<MdModeEditOutline />}
        label="Modifier un produit"
        className={tabActive("edit")}
        onClick={() => isTabSelected("edit")}
      />
    </PanelTabsStyled>
  );
}

export default PanelTabs;

const PanelTabsStyled = styled.div`
  display: flex;

  button {
    margin-left: 1px;
  }

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    border-bottom: 2px;
  }
`;
