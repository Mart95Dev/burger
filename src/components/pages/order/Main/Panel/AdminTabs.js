import React from "react";
import styled from "styled-components";

function AdminTabs() {
  return (
    <AdminTabsStyled>
      <h1>Admin tabs</h1>
    </AdminTabsStyled>
  );
}

export default AdminTabs;

const AdminTabsStyled = styled.div`
  border: 3px solid blue;
`;
