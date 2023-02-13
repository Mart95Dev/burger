import { useState } from "react";
import { useContext } from "react";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import PanelContentTabs from "./PanelContentTabs";
import styled from "styled-components/macro";
import PanelContext from "../../../../../context/PanelContext";

function PanelTabs() {
  //state
  const openPanelAdmin = 250;
  const reducePanelAdmin = -10;
  const { isModeAdmin } = useContext(PanelContext);
  const [toggleTabsCurrent, setToggleTabsCurrent] = useState(1);
  const [tabsBottom, setTabsBottom] = useState(openPanelAdmin); // avant modif usaState(243)
  const [tabDisplay, setTabDisplay] = useState(true); // avant modif useState("block")
  const [reduceContainer, setReduceContainer] = useState(false);
  const [tabChevron, setTabsChevron] = useState("tab-chevron");
  // const [icons, setIcons] = useState("icons");

  const display = tabDisplay ? "block" : "none";
  //comportement

  // function to modify class
  const modifyTabClass = (index) => {
    if (toggleTabsCurrent === index) {
      return "tabs active-tabs";
    } else {
      return "tabs";
    }
  };

  const activeIcons = (index) => {
    if (index === 1 || index === 2) {
      return "icons active-icons";
    } else {
      return "icons";
    }
  };

  const activeIconChevron = (index) => {
    if (index === 3) {
      return "icon-chevron active-icons";
    } else {
      return "icon-chevron";
    }
  };

  const toggleTab = (index) => {
    // setToggleTabs(index);
    if (index !== 3) setToggleTabsCurrent(index);
    reduceTabChevron(index);
    clickTabsProduct(index);
    activeIcons(index);
  };

  const clickTabsProduct = (index) => {
    if ((index === 2 || index === 1) && reduceContainer) {
      setTabsBottom(openPanelAdmin); // refait
      setTabDisplay(!tabDisplay); // refait
      setReduceContainer(!reduceContainer);
      setTabsChevron("tab-chevron");
      return display;
    }
  };

  const reduceTabChevron = (index) => {
    if (index === 3 && !reduceContainer) {
      setTabsBottom(reducePanelAdmin); // refait
      setTabDisplay(!tabDisplay); // refait
      setReduceContainer(!reduceContainer);
      setTabsChevron("tab-chevron active-tabs");
      return display;
    } else if (index === 3 && reduceContainer) {
      setTabsBottom(openPanelAdmin); // refait
      setTabDisplay(!tabDisplay); // refait
      setReduceContainer(!reduceContainer);
      setTabsChevron("tab-chevron");
      return display;
    }
  };

  //display
  return (
    <>
      <PanelTabsStyled
        tabBottom={tabsBottom}
        contextPanel={isModeAdmin}
        tabChevron={tabChevron}
      >
        <div className="container-tabs">
          <div className={tabChevron} onClick={() => toggleTab(3)}>
            {reduceContainer ? (
              <FiChevronUp className={() => activeIconChevron(3)} />
            ) : (
              <FiChevronDown className={() => activeIconChevron(3)} />
            )}
          </div>
          <div className={modifyTabClass(1)} onClick={() => toggleTab(1)}>
            <AiOutlinePlus className={() => activeIcons(1)} />
            <p>Ajouter un produit</p>
          </div>
          <div className={modifyTabClass(2)} onClick={() => toggleTab(2)}>
            <BsPencil className={() => activeIcons(2)} />
            <p>Modifier un produit</p>
          </div>
        </div>
      </PanelTabsStyled>
      <PanelContentTabs
        toggleTabsCurrent={toggleTabsCurrent}
        contentTabDisplay={tabDisplay}
        display={display}
        contextPanel={isModeAdmin}
      />
    </>
  );
}

export default PanelTabs;

const PanelTabsStyled = styled.div`
  z-index: 5;
  /* grid-column-start: 2; */ //désactiver pour le panel
  position: absolute;
  bottom: ${(props) =>
    props.contextPanel ? props.tabBottom : "-50"}px; //aucune modif
  height: 43px;
  left: 71px;
  font-size: 16px;
  width: 80%;

  .container-tabs {
    display: flex;
    flex-direction: row;
    gap: 1px;
    background: transparent;
    padding: 0px;
  }

  .tabs,
  .tab-chevron {
    height: 43px;
    background: #ffffff;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: #e4e5e9;
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
    border-radius: 5px 5px 0px 0px;
    color: #93a2b1;
  }

  .tabs {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 22px 11px 51px;
    cursor: pointer;
  }

  .tab-chevron {
    width: 60px;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .tabs:hover,
  .tab-chevron:hover {
    border-bottom-color: white;
    text-decoration: underline;
    text-decoration-color: #93a2b1;
  }

  .active-tabs {
    background: #292729;
    color: #ffffff;
  }

  .active-icons {
    position: absolute;
    left: 24px;  }
    color: #ffffff;
  }

  .icons {
    position: absolute;
    left: 24px;
  }

  .icons,
  .icon-chevron {
    height: 15px;
    width: 15px;
    color: #93a2b1;
  }

  .test1 {
    background: red;
    margin-left: 2px;
  }
  .test2 {
    background: blue;
  }
`;
