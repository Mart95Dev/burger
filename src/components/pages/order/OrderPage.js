import { useState } from "react";
import styled from "styled-components";
import Navbar from "../order/Navbar/Navbar";
import Main from "../order/Main/Main";
import PanelContext from "../../context/OrderContext";
import { theme } from "./../../../theme/index";
import { fakeMenu } from "../../api/fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../components/pages/order/Main/Panel/FormAdmin/AddForm";

export default function OrderPage() {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [tabIconSelected, setTabIconSelected] = useState(false);
  const [tabSelected, setTabSelected] = useState("add");
  const [isCollasped, setIsCollasped] = useState(false);
  const [menu, setMenu] = useState(fakeMenu.SMALL);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  //comportement
  const handleAdd = (newProduct) => {
    // copy du array
    const menuCopy = [...menu];
    //2 manip copy array
    const menuUpdated = [newProduct, ...menuCopy];
    //3 update du state
    setMenu(menuUpdated);
  };

  const handleDelete = (idOfProductToDelete) => {
    //1 copy this.state.
    const menuCopy = [...menu];
    //2 manip copy this.state.
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    //3 update this.state.
    setMenu(menuUpdated);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.SMALL);
  };

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
  };

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
