import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Navbar from "../order/Navbar/Navbar";
import Main from "../order/Main/Main";
import PanelContext from "../../context/OrderContext";
import { theme } from "./../../../theme/index";
import { EMPTY_PRODUCT } from "./../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";

export default function OrderPage() {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [tabIconSelected, setTabIconSelected] = useState(false);
  const [tabSelected, setTabSelected] = useState("add");
  const [isCollasped, setIsCollasped] = useState(false);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setproductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const [hasAlreadyBeenClicked, setHasAlreadyBeenClicked] = useState(false);
  const { menu, handleAdd, handleEdit, handleDelete, resetMenu } = useMenu();
  //comportement
  useEffect(() => {
    document.title = "Crazee Burger | Menu";
  }, []);

  const panelContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    tabIconSelected,
    setTabIconSelected,
    tabSelected,
    setTabSelected,
    isCollasped,
    setIsCollasped,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setproductSelected,
    handleEdit,
    titleEditRef,
    hasAlreadyBeenClicked,
    setHasAlreadyBeenClicked,
  };

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
