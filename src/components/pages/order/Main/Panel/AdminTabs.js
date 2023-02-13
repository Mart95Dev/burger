import React from "react";
import styled from "styled-components";
import Tabs from "./../../../../reusable-ui/Tabs";

function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tabs />
    </AdminTabsStyled>
  );
}

export default AdminTabs;

const AdminTabsStyled = styled.div`
  border: 3px solid blue;

  bottom: 0px;
`;
