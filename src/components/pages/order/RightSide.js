import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../theme/index";

export default function RightSide() {
  //state
  const { username } = useParams();

  //comortements

  //affichage
  return (
    <ContainerRightSideStyled>
      <div className="text-profil">
        <h1>
          Hey, <span className="username">{username}</span>
        </h1>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>
      <BsPersonCircle className="icon-navbar" />
    </ContainerRightSideStyled>
  );
}

const ContainerRightSideStyled = styled.div`
  background: purple;
  display: flex;
  align-items: center;
  margin-right: 70px;
  margin-top: 31.09px;
  margin-bottom: 31.09px;

  h1 {
    font-size: 15px;
  }

  .text-profil {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }

  .username {
    color: ${theme.colors.primary};
  }

  .icon-navbar {
    width: 36px;
    height: 36px;
  }

  button {
    border-style: none;
    cursor: pointer;
    background-color: transparent;
    margin: auto;
  }

  .text-profil,
  .icon-navbar,
  .text-profil,
  button {
    color: ${theme.colors.greyMedium};
  }
`;
