import React from "react";
import styled from "styled-components";

function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <div>
        <span>Pas de produit pour le client</span>
      </div>
    </EmptyMenuClientStyled>
  );
}

export default EmptyMenuClient;

const EmptyMenuClientStyled = styled.div``;
