import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme/index";

const TextInput = React.forwardRef(
  (
    { value, className, onChange, Icon, version = "normal", ...restProps },
    ref
  ) => {
    return (
      <InputStyled className={className} version={version}>
        {Icon && Icon}
        <input ref={ref} value={value} onChange={onChange} {...restProps} />
      </InputStyled>
    );
  }
);

export default TextInput;

const InputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    display: flex; // to center icon vertically
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
  }

  input {
    margin-left: 10px;
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  /* ${(props) => {
    if (props.version === "normal") return extraStyleNormal;
    if (props.version === "minimalist") return extraStyleMinimalist;
  }} */

  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white}; ////+
    color: ${theme.colors.dark};

    &:focus {
      outline: 0; //// add outline
    }
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
};
