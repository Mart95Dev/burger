import { useState, useContext } from "react";
import { fakeMenu } from "./../components/api/fakeData/fakeMenu";
import PanelContext from "../components/context/OrderContext";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [basket, setBasket] = useState([]);
  const [amountTotal, setAmountTotal] = useState(0);

  const { setHasAlreadyBeenClicked } = useContext(PanelContext);

  const handleAdd = (newProduct) => {
    //1 copy du array
    const menuCopy = [...menu];
    //2 manip copy array
    const menuUpdated = [newProduct, ...menuCopy];
    //3 update du state
    setMenu(menuUpdated);
  };
  //////////BASKET
  const handleAddBasket = (event, productId) => {
    event.stopPropagation();

    let basketCopyUpdated = [];
    const basketCopy = [...basket];

    let hasProductAlreadyAdded = false;

    basketCopyUpdated = basketCopy.map((el) => {
      if (el.id === productId) {
        el.quantity++;
        setAmountTotal(amountTotal + el.price);
        hasProductAlreadyAdded = true;
      }
      return el;
    });

    if (hasProductAlreadyAdded === false) {
      const productAdd = menu.find((product) => product.id === productId);
      const newProductBasket = { ...productAdd, quantity: 1 };
      setAmountTotal(amountTotal + productAdd.price);

      basketCopyUpdated = [newProductBasket, ...basketCopy];
    }
    setBasket(basketCopyUpdated);
  };

  const handleDeleteBasket = (idProductBasketToDelete) => {
    if (basket.length > 0) {
      console.log(basket.length);
      const basketCopy = JSON.parse(JSON.stringify(basket));

      const basketUpdated = basketCopy.filter(
        (product) => product.id !== idProductBasketToDelete
      );

      //2 manip copy this.state.
      const productPriceDelete = basketCopy.filter(
        (product) => product.id === idProductBasketToDelete
      );

      setAmountTotal(
        amountTotal -
          productPriceDelete[0].price * productPriceDelete[0].quantity
      );
      if (amountTotal < 0) return setAmountTotal(0);
      //3 update this.state.
      return setBasket(basketUpdated);
    } else {
      return setAmountTotal(amountTotal);
    }
  };

  ////////////////////

  const handleDelete = (idOfProductToDelete) => {
    //1 copy this.state.
    const menuCopy = JSON.parse(JSON.stringify(menu));
    const basketCopy = JSON.parse(JSON.stringify(basket));
    //2 manip copy this.state.
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    const basketUpdated = basketCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    const productPriceDelete = basketCopy.filter(
      (product) => product.id === idOfProductToDelete
    );

    setAmountTotal(
      amountTotal - productPriceDelete[0].price * productPriceDelete[0].quantity
    );
    //3 update this.state.
    setMenu(menuUpdated);
    setBasket(basketUpdated);
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
    basket,
    menu,
    setMenu,
    handleAdd,
    handleEdit,
    handleDelete,
    resetMenu,
    handleAddBasket,
    handleDeleteBasket,
    amountTotal,
  };
};
