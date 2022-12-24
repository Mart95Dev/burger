import styled from "styled-components";

function ContainerContentTabsAdmin({
  toggleTabs,
  contentTabDisplay,
  isModeAdmin,
}) {
  //state

  console.log({ contentTabDisplay });

  //display
  return (
    <>
      <PanelStyled displayContentTab={contentTabDisplay}>
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
  z-index: 5;
  grid-column-start: 2;
  background: white;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 250px;
  padding: 30px;
  border: 1px solid #e4e5e9;
  display: ${(props) => props.displayContentTab};

  .content-tab {
    display: flex;
    justify-content: start;
    align-items: center;
    display: none;
  }

  .active-content-tab {
    display: block;
  }
`;
