import { useState } from "react";
import styled from "styled-components";
import Navbar from "../order/Navbar/Navbar";
import Main from "../order/Main/Main";
import PanelContext from "../../context/OrderContext";
import FormPanelContext from "../../context/AdminContext";
import { theme } from "./../../../theme/index";

export default function OrderPage() {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [tabIconSelected, setTabIconSelected] = useState(false);
  const [tabSelected, setTabSelected] = useState("add");
  const [isCollasped, setIsCollasped] = useState(false);
  const [nameProduct, setNameProduct] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(true);
  const [pub, setPub] = useState(false);

  const panelContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    tabIconSelected,
    setTabIconSelected,
    tabSelected,
    setTabSelected,
    isCollasped,
    setIsCollasped,
  };

  const FormPanelValue = {
    nameProduct,
    setNameProduct,
    url,
    setUrl,
    price,
    setPrice,
    stock,
    setStock,
    pub,
    setPub,
  };

  //comportement

  //display
  return (
    <PanelContext.Provider value={panelContextValue}>
      <FormPanelContext.Provider value={FormPanelValue}>
        <OrderPageStyled>
          <div className="container">
            <Navbar />
            <Main />
          </div>
        </OrderPageStyled>
      </FormPanelContext.Provider>
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
