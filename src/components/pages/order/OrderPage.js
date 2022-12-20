import { useState } from "react";
import styled from "styled-components";
import Navbar from "../order/Navbar/Navbar";
import Main from "../order/Main/Main";
import PanelContext from "../../../context/PanelContext";
import { theme } from "./../../../theme/index";

export default function OrderPage() {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const panelContextValue = { isModeAdmin, setIsModeAdmin };

  //comportement

  //display
  return (
    <PanelContext.Provider value={panelContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </PanelContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound}
      ${theme.borderRadius.extraRound} 0 0;
  }
`;
