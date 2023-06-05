import { useState } from "react";
import { fakeMenu } from "./../components/api/fakeData/fakeMenu";
import { fakeBasket } from "./../components/api/fakeData/fakeBasket";
// import PanelContext from "../components/context/OrderContext";

export const useBasket = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [basket, setBasket] = useState(fakeBasket.EMPTY);
  const [amountTotal, setAmountTotal] = useState(0);

  //   const { setHasAlreadyBeenClicked } = useContext(PanelContext);

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

  const handleDelete = (idOfProductToDelete) => {
    //1 copy this.state.
    const menuCopy = JSON.parse(JSON.stringify(menu));
    //2 manip copy this.state.
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    if (basket.length > 0) {
      const basketCopy = JSON.parse(JSON.stringify(basket));
      const basketUpdated = basketCopy.filter(
        (product) => product.id !== idOfProductToDelete
      );
      const productPriceDelete = basketCopy.filter(
        (product) => product.id === idOfProductToDelete
      );
      setAmountTotal(
        Math.abs(
          amountTotal -
            productPriceDelete[0].price * productPriceDelete[0].quantity
        )
      );
      setBasket(basketUpdated);
    }

    //3 update this.state.
    setMenu(menuUpdated);
  };

  return {
    basket,
    handleDelete,
    handleAddBasket,
    handleDeleteBasket,
    amountTotal,
  };
};
