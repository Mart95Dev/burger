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
      <div className="text-profile">
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
  padding-right: 70px;

  h1 {
    font-size: 15px;
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
