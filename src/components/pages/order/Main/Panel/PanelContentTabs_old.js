import styled from "styled-components";

function PanelContentTabs({
  toggleTabsCurrent,
  contentTabDisplay,
  display,
  contextPanel,
}) {
  //state

  //comportement
  const modifyTabContentClass = (index) => {
    if (toggleTabsCurrent === index) {
      return "content-tab active-content-tab";
    } else {
      return "content-tab";
    }
  };

  //display
  return (
    <>
      <PanelContent contentTabDisplay={display} isModeAdmin={contextPanel}>
        <div className={modifyTabContentClass(1)}>
          <p className="text-add-update">Ajouter produit</p>
        </div>
        <div className={modifyTabContentClass(2)}>
          <p className="text-add-update">Modifier produit</p>
        </div>
      </PanelContent>
    </>
  );
}

export default PanelContentTabs;

const PanelContent = styled.div`
  z-index: 3;
  /* grid-column-start: 2; */ //désactiver pour le panel
  position: absolute;
  background: #ffffff;
  /* border-top: 1px solid #e4e5e9; */
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);

  bottom: ${(props) => (props.isModeAdmin ? "0" : "-60")}px; // aucune modif
  right: 0;
  left: 0;
  height: 251px;
  padding: 30px;
  display: ${(props) =>
    props.isModeAdmin ? props.contentTabDisplay : "none"}; // aucune modif

  .content-tab {
    display: flex;
    justify-content: start;
    align-items: center;
    display: none;
  }

  .active-content-tab {
    display: ${(props) =>
      props.isModeAdmin ? props.contentTabDisplay : ""}; //aucune modif
  }

  .text-add-update {
    padding-top: 17px;
    padding-left: 21px;
  }
`;
