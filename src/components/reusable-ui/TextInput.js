import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index";

export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  inputText,
  ...restProps
}) {
  return (
    <InputStyled className={className}>
      {Icon && Icon}
      <input
        style={inputText && inputText}
        className={className}
        value={value}
        onChange={onChange}
        {...restProps}
      />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;

  .icon {
    font-size: ${theme.fonts.size.P0};
    margin-right: ${theme.spacing.xs};
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    width: 100%;
  }

  &::placeholder {
    background: ${theme.colors.white};
    color: ${theme.colors.greyLight};

  
`;
