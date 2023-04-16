import React from "react";
import styled from "styled-components";

function inputSelect({
  name,
  Icon,
  className,
  onChange,
  option_1,
  option_2,
  ref,
}) {
  return (
    <InputSelectStyled className={className}>
      {Icon}
      <select name={name} className="select" onChange={onChange}>
        {option_1}
        {option_2}
      </select>
    </InputSelectStyled>
  );
}

export default inputSelect;

const InputSelectStyled = styled.div`
  display: flex;
  align-items: center;
  color: rgb(245, 245, 247);
  .select {
    margin-left: 10px;
    border: none;
    font-size: 15px;
  }
`;
