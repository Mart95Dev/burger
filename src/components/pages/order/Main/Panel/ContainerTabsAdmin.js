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
  const [tabsBottom, setTabsBottom] = useState(243);
  const [tabDisplay, setTabDisplay] = useState("block");
  const [reduceContainer, setReduceContainer] = useState(false);

  //comportement
  const toggleTab = (index) => {
    setToggleTabs(index);
    if (index === 3 && !reduceContainer) {
      setTabsBottom(-6);
      setTabDisplay("none");
      setReduceContainer(!reduceContainer);
    } else if (index === 3 && reduceContainer) {
      setTabsBottom(243);
      setTabDisplay("block");
      setReduceContainer(!reduceContainer);
    }
    clickTabProduct(index);
  };

  const clickTabProduct = (index) => {
    if ((index === 2 || index === 1) && reduceContainer) {
      setTabsBottom(243);
      setTabDisplay("block");
      setReduceContainer(!reduceContainer);
    }
  };

  return (
    <>
      <ContainerTabsAdminStyled
        tabBottom={tabsBottom}
        contextPanel={isModeAdmin}
      >
        <div className="container-tabs">
          <div
            className={
              toggleTabs === 3
                ? "tabs active-tabs icon-tabs active-icons"
                : "tabs icon-tabs"
            }
            onClick={() => toggleTab(3)}
          >
            {reduceContainer ? (
              <FiChevronUp className="icon-chevron" />
            ) : (
              <FiChevronDown className="icon-chevron" />
            )}
          </div>
          <div
            className={toggleTabs === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <AiOutlinePlus className="icons" />
            Ajouter un produit
          </div>
          <div
            className={toggleTabs === 2 ? "tabs active-tabs" : "tabs"}
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
  z-index: 3;
  grid-column-start: 2;
  position: absolute;
  bottom: ${(props) => props.tabBottom}px;
  /* bottom: 243px; */
  height: 40px;
  left: 45px;
  font-size: 16px;
  width: 50%;

  .container-tabs {
    background: transparent;
    display: flex;
    align-items: center;
    padding: 0px;
  }

  .tabs {
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

  .active-tabs {
    background: black;
    color: white;
  }

  .icon-tabs {
    padding: 5px 15px;
  }

  .icons {
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }

  .icon-chevron {
    height: 20px;
    width: 20px;
  }

  .active-icons {
    color: white;
  }
`;
