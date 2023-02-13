import React from "react";
import styled from "styled-components";

function Tabs() {
  return (
    <TabsStyled>
      <p>chevron</p>
    </TabsStyled>
  );
}

export default Tabs;

const TabsStyled = styled.button`
  border: 2px solid green;
  height: 43px;
  padding: 0 22px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  position: relative;
  left: 5%;
`;
