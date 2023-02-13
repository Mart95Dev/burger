import React from "react";
import styled from "styled-components";
import Tab from "./../../../../reusable-ui/Tab";

function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab />
    </AdminTabsStyled>
  );
}

export default AdminTabs;

const AdminTabsStyled = styled.div`
  border: 3px solid blue;

  bottom: 0px;
`;
