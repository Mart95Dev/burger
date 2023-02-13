import React from "react";
import styled from "styled-components";
import Tab from "./../../../../reusable-ui/Tab";

// import tabConfig from "./tabsConfig";

function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab />
    </AdminTabsStyled>
  );
}

export default AdminTabs;

const AdminTabsStyled = styled.div`
  display: flex;
  flex-direction: row;
`;
