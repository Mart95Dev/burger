import React from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

function Tab({ icon, label }) {
  return <TabsStyled></TabsStyled>;
}

export default Tab;

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
