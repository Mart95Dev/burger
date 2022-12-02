import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index";

export default function TextInput({ value, onChange, Icon, ...restProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} {...restProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px opx; // could be handle in parent too

  .icon {
    font-size: ${theme.fonts.P0};
    margin-right: ${theme.spacing.xs};
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.dark};
    width: 100%;
  }

  &::placeholder {
    background: ${theme.colors.white};
    color: ${theme.colors.greyLight};
`;
