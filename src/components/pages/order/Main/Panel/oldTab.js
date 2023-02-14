import { useState } from "react";
import PanelContext from "../../../../context/OrderContext";
import styled from "styled-components/macro";

function Tab() {
  //state
  // const openPanelAdmin = 250;
  // const reducePanelAdmin = -10;
  // const display = tabDisplay ? "block" : "none";
  // const [tabsBottom, setTabsBottom] = useState(openPanelAdmin);
  // const [tabDisplay, setTabDisplay] = useState(true);
  // const [reduceContainer, setReduceContainer] = useState(false);
  // const [toggleTabsCurrent, setToggleTabsCurrent] = useState(1);
  // const [tabChevron, setTabsChevron] = useState("tab-chevron");
  // const { isModeAdmin } = useContext(PanelContext);

  //comportement

  // function to modify class
  // const modifyTabClass = (index) => {
  //   if (toggleTabsCurrent === index) {
  //     return "tabs active-tabs";
  //   } else {
  //     return "tabs";
  //   }
  // };

  // const activeIcons = (index) => {
  //   if (index === 1 || index === 2) {
  //     return "icons active-icons";
  //   } else {
  //     return "icons";
  //   }
  // };

  // const activeIconChevron = (index) => {
  //   if (index === 3) {
  //     return "icon-chevron active-icons";
  //   } else {
  //     return "icon-chevron";
  //   }
  // };

  // const toggleTab = (index) => {
  //   // setToggleTabs(index);
  //   if (index !== 3) setToggleTabsCurrent(index);
  //   // reduceTabChevron(index);
  //   // clickTabsProduct(index);
  //   activeIcons(index);
  // };

  // const clickTabsProduct = (index) => {
  //   if ((index === 2 || index === 1) && reduceContainer) {
  //     setTabsBottom(openPanelAdmin); // refait
  //     setTabDisplay(!tabDisplay); // refait
  //     setReduceContainer(!reduceContainer);
  //     setTabsChevron("tab-chevron");
  //     return display;
  //   }
  // };

  // const reduceTabChevron = (index) => {
  //   if (index === 3 && !reduceContainer) {
  //     setTabsBottom(reducePanelAdmin); // refait
  //     setTabDisplay(!tabDisplay); // refait
  //     setReduceContainer(!reduceContainer);
  //     setTabsChevron("tab-chevron active-tabs");
  //     return display;
  //   } else if (index === 3 && reduceContainer) {
  //     setTabsBottom(openPanelAdmin); // refait
  //     setTabDisplay(!tabDisplay); // refait
  //     setReduceContainer(!reduceContainer);
  //     setTabsChevron("tab-chevron");
  //     return display;
  //   }
  // };

  //display
  return (
    <>
      <TabStyled>
        {/* <div className="container-tabs">
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
            <MdModeEditOutline className={() => activeIcons(2)} />
            <p>Modifier un produit</p>
          </div>
        </div> */}
        <div></div>
      </TabStyled>
    </>
  );
}

export default Tab;

const TabStyled = styled.div`
  /* grid-column-start: 2; */ //désactiver pour le panel

  display: flex;
  flex-direction: row;
  padding: 0 22px;
  height: 43px;

  font-size: 16px;
  margin-left: 1px;
  background: #ffffff;

  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: #e4e5e9;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 0px 0px;
  color: #93a2b1;

  .tabs:hover,
  .tab-chevron:hover {
    border-bottom-color: white;
    text-decoration: underline;
    text-decoration-color: #93a2b1;
  }
`;
