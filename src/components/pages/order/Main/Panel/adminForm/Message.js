import React from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import styled from "styled-components/macro";
import { theme } from "./../../../../../../theme/index";

export default function Message({ formSubmitted }) {
  return (
    <MessageStyled>
      {formSubmitted ? (
        <div className=" success">
          <span className="icon-success ">
            <MdCheckCircleOutline />
          </span>
          <span className="text-success"> Ajouté avec succès !</span>
        </div>
      ) : (
        ""
      )}
    </MessageStyled>
  );
}

const MessageStyled = styled.div`
.success {
    position: absolute;
    width: 100%;
    left: 105%;
    display: flex;
    align-items: center;

    .icon-success {
      display: flex;
      align-items: center;
      color: ${theme.colors.success};
    }

    .text-success {
      font-size: ${theme.fonts.size.SM};
      color: ${theme.colors.success};
    }
`;
