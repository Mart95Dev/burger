import React from "react";
import styled from "styled-components";

function inputSelect({
  Icon,
  className,
  value,
  onChange,
  name,
  id,
  option_1,
  option_2,
}) {
  return (
    <InputSelectStyled className={className}>
      {Icon}
      <select name={name} id={id} onChange={onChange} className="select">
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
  .select {
    margin-left: 10px;
    border: none;
    font-size: 15px;
  }
`;
