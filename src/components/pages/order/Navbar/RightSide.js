import React from "react";
//import { useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import ToastAdmin from "./ToastAdmin";
import { toast } from "react-toastify";
import { theme } from "./../../../../theme/index";
import { useContext } from "react";
import PanelContext from "../../../../context/PanelContext";

export default function RightSide() {
  //state
  const { username } = useParams();
  const { isModeAdmin, setIsModeAdmin } = useContext(PanelContext);
  //const [isModeAdmin, setisModeAdmin] = useState(false);

  //comortements
  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  //affichage
  return (
    // <PanelContext.Provider value={isModeAdminContextValue}>
    <ContainerRightSideStyled>
      <ToggleButton
        className={"admin-button"}
        labelIfUnchecked={"Activer le mode admin"}
        labelIfChecked={"Désactiver le mode admin"}
        onToggle={displayToastNotification}
      />
      <div className="text-profile">
        <ToastAdmin />
        <h1>
          Hey, <span className="username">{username}</span>
        </h1>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>
      <BsPersonCircle className="profile" />
    </ContainerRightSideStyled>
    // </PanelContext.Provider>
  );
}

const ContainerRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  height: 100%;

  .admin-button {
    margin-right: 50px;
    width: 240px;
    height: 40px;
  }

  h1 {
    font-size: ${theme.fonts.size.P0};
  }

  .text-profile {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }

  .username {
    text-transform: capitalize;
    color: ${theme.colors.primary};
  }

  .profile {
    width: 36px;
    height: 36px;
  }

  button {
    border-style: none;
    cursor: pointer;
    background-color: transparent;
    margin: auto;
  }

  .text-profile,
  .profile,
  button {
    color: ${theme.colors.greyMedium};
  }
`;
