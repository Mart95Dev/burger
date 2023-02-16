import styled from "styled-components/macro";
import { theme } from "../../theme";

function Tab({ icon, label, onClick, className }) {
  //state

  //display
  return (
    <>
      <TabStyled onClick={onClick} className={className}>
        {icon && <div className="icon">{icon}</div>}
        {label && <span className="label"> {label}</span>}
      </TabStyled>
    </>
  );
}

export default Tab;

const TabStyled = styled.button`
  /* grid-column-start: 2; */ //désactiver pour le panel (le basket)

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  padding: 10px 22px;
  height: 43px;

  position: relative;
  left: 5%;

  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};

  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  border-radius: 5px 5px 0px 0px;

  .icon {
    display: flex;
  }

  .label {
    margin-left: 13px;
  }

  :hover {
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
  }
`;
