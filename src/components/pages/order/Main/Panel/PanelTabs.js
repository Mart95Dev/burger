import React from "react";
import { useContext } from "react";
import PanelContext from "../../../../context/OrderContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components/macro";
import Tab from "../../../../reusable-ui/Tab";
import { theme } from "./../../../../../theme/index";
import { configTabs } from "./configTabs";

function PanelTabs() {
  const {
    tabSelected,
    setTabSelected,
    tabIconSelected,
    setTabIconSelected,
    isCollasped,
    setIsCollasped,
  } = useContext(PanelContext);

  const selectTab = (tab) => {
    if (tab === "icon") {
      setTabIconSelected(!tabIconSelected);
      setIsCollasped(!isCollasped);
    }
    if (tab !== "icon") {
      setTabSelected(tab);
    }
    if ((tabSelected === "add" || tabSelected === "edit") && tabIconSelected) {
      setIsCollasped(!isCollasped);
      setTabIconSelected(!tabIconSelected);
    }
  };

  const modifyClassTabSelected = (tab) =>
    tabSelected === tab ? "is-active" : "";

  const tabs = configTabs;

  return (
    <PanelTabsStyled>
      <Tab
        icon={tabIconSelected ? <FiChevronUp /> : <FiChevronDown />}
        className={tabIconSelected ? "is-active" : ""}
        onClick={() => selectTab("icon")}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          icon={tab.icon}
          label={tab.label}
          className={modifyClassTabSelected(tab.index)}
          onClick={() => selectTab(tab.index)}
        />
      ))}
    </PanelTabsStyled>
  );
}

export default PanelTabs;

const PanelTabsStyled = styled.div`
  display: flex;
  position: absolute;
  left: 5%;
  top: -43px;

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
