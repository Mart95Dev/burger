import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../../theme/index";
import ToggleButton from "./ToggleButton";
import ToastAdmin from "./ToastAdmin";
import { toast } from "react-toastify";

export default function RightSide() {
  //state
  const { username } = useParams();
  const [isModeAdmin, setisModeAdmin] = useState(false);

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
    setisModeAdmin(!isModeAdmin);
  };

  //affichage
  return (
    <ContainerRightSideStyled>
      {/* <div className="admin-button">Admin button</div> */}
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
