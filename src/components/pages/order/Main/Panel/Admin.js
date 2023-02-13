import React from "react";
import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminEdit from "./AdminEdit";

export default function Admin() {
  return (
    <AdminStyled>
      <AdminTabs />
      <AdminEdit />
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  z-index: 2;
  position: absolute;
  /* grid-column-start: 2; */
  border: 3px solid red;
  height: 251px;
  left: 0;
  right: 0;
  bottom: 0;
`;
