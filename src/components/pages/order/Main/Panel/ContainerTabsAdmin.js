import { useState } from "react";
// import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import ContainerContentTabsAdmin from "./ContainerContentTabsAdmin";
import styled from "styled-components/macro";

function ContainerTabsAdmin() {
  //state
  const [toggleTabs, setToggleTabs] = useState(1);

  //comportement
  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  return (
    <>
      <ContainerTabsAdminStyled>
        <div className="container-tabs">
          <div
            className={
              toggleTabs === 3 ? "tabs active-tabs icon-tabs" : "tabs icon-tabs"
            }
            onClick={() => toggleTab(3)}
          >
            <FiChevronDown />
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
      <ContainerContentTabsAdmin toggleTabs={toggleTabs} />
    </>
  );
}

export default ContainerTabsAdmin;

const ContainerTabsAdminStyled = styled.div`
  z-index: 3;
  grid-column-start: 2;
  position: absolute;
  bottom: 243px;
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
    font-size: 15px;
    margin-right: 10px;
  }
`;
