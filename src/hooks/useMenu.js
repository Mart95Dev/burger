import { useState, useContext } from "react";
import { fakeMenu } from "./../components/api/fakeData/fakeMenu";
import PanelContext from "../components/context/OrderContext";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const { setHasAlreadyBeenClicked } = useContext(PanelContext);

  const handleAdd = (newProduct) => {
    //1 copy du array
    const menuCopy = [...menu];
    //2 manip copy array
    const menuUpdated = [newProduct, ...menuCopy];
    //3 update du state
    setMenu(menuUpdated);
  };

  const handleDelete = (idOfProductToDelete) => {
    //1 copy this.state.
    const menuCopy = JSON.parse(JSON.stringify(menu));
    //2 manip copy this.state.
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    // if (basket.length > 0) {
    //   const basketCopy = JSON.parse(JSON.stringify(basket));
    //   const basketUpdated = basketCopy.filter(
    //     (product) => product.id !== idOfProductToDelete
    //   );
    //   const productPriceDelete = basketCopy.filter(
    //     (product) => product.id === idOfProductToDelete
    //   );
    //   setAmountTotal(
    //     Math.abs(
    //       amountTotal -
    //         productPriceDelete[0].price * productPriceDelete[0].quantity
    //     )
    //   );
    //   // if (amountTotal < 0) return setAmountTotal(0);
    //   setBasket(basketUpdated);
    // }

    //3 update this.state.
    setMenu(menuUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    // copy du array
    const menuCopy = JSON.parse(JSON.stringify(menu));
    //2 manip copy array
    const indexOfProductToEdit = menu.findIndex(
      (product) => product.id === productBeingEdited.id
    );
    menuCopy[indexOfProductToEdit] = productBeingEdited;
    //3 update du state
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.SMALL);
    setHasAlreadyBeenClicked(false);
  };

  return {
    menu,
    setMenu,
    handleAdd,
    handleEdit,
    handleDelete,
    resetMenu,
  };
};
