import styled from "styled-components";
import { useContext } from "react";
import PanelContext from "../../../../context/OrderContext";
import FormAdminPanel from "./../../../../reusable-ui/FormAdminPanel";

import { theme } from "./../../../../../theme/index";
import { HiCursorClick } from "react-icons/hi";

function PanelEditTabs() {
  //state
  const { tabSelected } = useContext(PanelContext);
  //comportement

  //display
  return (
    <>
      <PanelEditStyled>
        <div>{tabSelected === "add" ? <FormAdminPanel /> : ""}</div>
        <div className="edit-text">
          {tabSelected === "edit" ? (
            <span>
              Cliquer sur un produit du menu pour le modifier span{" "}
              <HiCursorClick className="icon" />
            </span>
          ) : (
            ""
          )}
        </div>
      </PanelEditStyled>
    </>
  );
}

export default PanelEditTabs;

const PanelEditStyled = styled.div`
  /* grid-column-start: 2; */ //désactiver pour le panel

  background: #ffffff;
  box-shadow: ${theme.shadows.medium};
  right: 0;
  left: 0;
  height: 250px;
  padding-top: 17px;
  padding-left: 21px;

  .edit-text {
    height: 100%;
    width: 50%;
    position: relative;
    top: 50px;

    span {
      color: rgb(116, 123, 145);
      font-family: "Amatic SC", cursive;
      font-size: 24px;
      animation: fadeIn 1000ms ease 0s 1 normal;

      .icon {
        margin-left: 10px;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }

  /* display: flex;
  justify-content: start; */
`;
