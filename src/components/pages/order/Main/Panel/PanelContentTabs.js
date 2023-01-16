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
      <PanelStyled contentTabDisplay={display} isModeAdmin={contextPanel}>
        <div className={modifyTabContentClass(1)}>
          <p>Ajouter produit</p>
        </div>
        <div className={modifyTabContentClass(2)}>
          <p>Modifier produit</p>
        </div>
      </PanelStyled>
    </>
  );
}

export default PanelContentTabs;

const PanelStyled = styled.div`
  z-index: 3;
  /* grid-column-start: 2; */ //désactiver pour le panel
  background: white;
  position: absolute;
  bottom: ${(props) => (props.isModeAdmin ? "0" : "-60")}px; // aucune modif
  right: 0;
  left: 0;
  height: 250px;
  padding: 30px;
  border: 1px solid #e4e5e9;
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
`;
