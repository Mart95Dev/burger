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
  const openPanelAdmin = 243;
  const reducePanelAdmin = -10;
  const { isModeAdmin } = useContext(PanelContext);
  const [toggleTabsCurrent, setToggleTabsCurrent] = useState(1);
  const [tabsBottom, setTabsBottom] = useState(openPanelAdmin); // avant modif usaState(243)
  const [tabDisplay, setTabDisplay] = useState(true); // avant modif useState("block")
  const [reduceContainer, setReduceContainer] = useState(false);
  const [tabsChevron, setTabsChevron] = useState("tabs icon-tabs");
  const display = tabDisplay ? "block" : "none";
  //comportement

  const modifyTabClass = (index) => {
    if (toggleTabsCurrent === index) {
      return "tabs active-tabs";
    } else {
      return "tabs";
    }
  };

  const toggleTab = (index) => {
    // setToggleTabs(index);
    if (index !== 3) setToggleTabsCurrent(index);
    reduceTabChevron(index);
    clickTabsProduct(index);
  };

  const clickTabsProduct = (index) => {
    if ((index === 2 || index === 1) && reduceContainer) {
      setTabsBottom(openPanelAdmin); // refait
      setTabDisplay(!tabDisplay); // refait
      setReduceContainer(!reduceContainer);
      setTabsChevron("tabs icon-tabs");
      return display;
    }
  };

  const reduceTabChevron = (index) => {
    if (index === 3 && !reduceContainer) {
      setTabsBottom(reducePanelAdmin); // refait
      setTabDisplay(!tabDisplay); // refait
      setReduceContainer(!reduceContainer);
      setTabsChevron("tabs active-tabs icon-tabs active-icons");
      return display;
    } else if (index === 3 && reduceContainer) {
      setTabsBottom(openPanelAdmin); // refait
      setTabDisplay(!tabDisplay); // refait
      setReduceContainer(!reduceContainer);
      setTabsChevron("tabs icon-tabs");
      return display;
    }
  };

  //display
  return (
    <>
      <PanelTabsStyled
        tabBottom={tabsBottom}
        contextPanel={isModeAdmin}
        tabsChevron={tabsChevron}
      >
        <div className="container-tabs">
          <div className={tabsChevron} onClick={() => toggleTab(3)}>
            {reduceContainer ? (
              <FiChevronUp className="icon-chevron" />
            ) : (
              <FiChevronDown className="icon-chevron" />
            )}
          </div>
          <div className={modifyTabClass(1)} onClick={() => toggleTab(1)}>
            <AiOutlinePlus className="icons" />
            Ajouter un produit
          </div>
          <div className={modifyTabClass(2)} onClick={() => toggleTab(2)}>
            <BsPencil className="icons" />
            Modifier un produit
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
  height: 40px;
  left: 45px;
  font-size: 16px;
  width: 50%;

  .container-tabs {
    display: flex;
    background: transparent;
    padding: 0px;
  }

  .tabs {
    display: flex;
    align-items: center;
    background: white;
    color: #a7a8ad;
    margin-left: 1px;
    border: 1px solid #e4e5e9;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 5px 10px;
    cursor: pointer;
  }

  .tabs:hover {
    border-bottom-color: white;
    text-decoration: underline;
  }

  .active-tabs {
    background: black;
    color: white;
  }

  .icon-tabs {
    padding: 5px 15px;
  }

  .icons {
    display: flex;
    align-items: center;
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }

  .icon-chevron {
    height: 15px;
    width: 15px;
  }

  .active-icons {
    color: white;
  }
`;
