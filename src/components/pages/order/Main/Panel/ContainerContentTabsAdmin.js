import styled from "styled-components";

function ContainerContentTabsAdmin({
  toggleTabs,
  contentTabDisplay,
  contextPanel,
}) {
  //state

  //display
  return (
    <>
      <PanelStyled
        contentTabDisplay={contentTabDisplay}
        isModeAdmin={contextPanel}
      >
        <div
          className={
            toggleTabs === 1 ? "content-tab active-content-tab" : "content-tab"
          }
        >
          <p>Ajouter produit</p>
        </div>
        <div
          className={
            toggleTabs === 2 ? "content-tab active-content-tab" : "content-tab"
          }
        >
          <p>Modifier produit</p>
        </div>
      </PanelStyled>
    </>
  );
}

export default ContainerContentTabsAdmin;

const PanelStyled = styled.div`
  z-index: 3;
  /* grid-column-start: 2; */ //désactiver pour le panel
  background: white;
  position: absolute;
  bottom: ${(props) => (props.isModeAdmin ? "0" : "-60")}px;
  right: 0;
  left: 0;
  height: 250px;
  padding: 30px;
  border: 1px solid #e4e5e9;
  display: ${(props) => (props.isModeAdmin ? props.contentTabDisplay : "none")};

  .content-tab {
    display: flex;
    justify-content: start;
    align-items: center;
    display: none;
  }

  .active-content-tab {
    display: ${(props) => (props.isModeAdmin ? props.contentTabDisplay : "")};
  }
`;
