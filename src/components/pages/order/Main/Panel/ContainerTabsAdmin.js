import { useState } from "react";
import { useContext } from "react";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import ContainerContentTabsAdmin from "./ContainerContentTabsAdmin";
import styled from "styled-components/macro";
import PanelContext from "../../../../../context/PanelContext";

function ContainerTabsAdmin() {
  //state
  const { isModeAdmin } = useContext(PanelContext);
  const [toggleTabs, setToggleTabs] = useState(1);
  const [toggleTabsCurrent, setToggleTabsCurrent] = useState(1);
  const [tabsBottom, setTabsBottom] = useState(243.5);
  const [tabDisplay, setTabDisplay] = useState("block");
  const [reduceContainer, setReduceContainer] = useState(false);
  const [tabsChevron, setTabsChevron] = useState("tabs icon-tabs");

  //comportement
  const toggleTab = (index) => {
    setToggleTabs(index);
    if (index !== 3) setToggleTabsCurrent(index);
    reduceTabChevron(index);
    clickTabsProduct(index);
  };

  const clickTabsProduct = (index) => {
    if ((index === 2 || index === 1) && reduceContainer) {
      setTabsBottom(243.5);
      setTabDisplay("block");
      setReduceContainer(!reduceContainer);
      setTabsChevron("tabs icon-tabs");
    }
  };

  const reduceTabChevron = (index) => {
    if (index === 3 && !reduceContainer) {
      setTabsBottom(-10);
      setTabDisplay("none");
      setReduceContainer(!reduceContainer);
      setTabsChevron("tabs active-tabs icon-tabs active-icons");
    } else if (index === 3 && reduceContainer) {
      setTabsBottom(243.5);
      setTabDisplay("block");
      setReduceContainer(!reduceContainer);
      setTabsChevron("tabs icon-tabs");
    }
  };

  //display
  return (
    <>
      <ContainerTabsAdminStyled
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
          <div
            className={toggleTabsCurrent === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <AiOutlinePlus className="icons" />
            Ajouter un produit
          </div>
          <div
            className={toggleTabsCurrent === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <BsPencil className="icons" />
            Modifier un produit
          </div>
        </div>
      </ContainerTabsAdminStyled>
      <ContainerContentTabsAdmin
        toggleTabs={toggleTabs}
        contentTabDisplay={tabDisplay}
        contextPanel={isModeAdmin}
      />
    </>
  );
}

export default ContainerTabsAdmin;

const ContainerTabsAdminStyled = styled.div`
  z-index: 5;
  /* grid-column-start: 2; */ //désactiver pour le panel
  position: absolute;
  bottom: ${(props) => (props.contextPanel ? props.tabBottom : "-50")}px;
  height: 40px;
  left: 45px;
  font-size: 16px;
  width: 50%;

  .container-tabs {
    display: flex;
    background: transparent;
    padding: 0px;
    /* box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset; */
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

// revoir tab chevron reste actif après réouverture
// resoudre le pb de focus
