import React from "react";
import styled from "styled-components";

function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuAdminStyled>
      <div>
        <span>Pas de produit</span>
        <button onClick={onReset}>Remettre des produits</button>
      </div>
    </EmptyMenuAdminStyled>
  );
}

export default EmptyMenuAdmin;

const EmptyMenuAdminStyled = styled.div``;
