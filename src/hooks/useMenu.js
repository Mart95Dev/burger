import { useState, useContext } from "react";
import { fakeMenu } from "./../components/api/fakeData/fakeMenu";
import PanelContext from "../components/context/OrderContext";
// import { cloneArray } from "./../../../utils/array"; //@FIXME

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const { setHasAlreadyBeenClicked } = useContext(PanelContext);

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
    const menuCopy = JSON.parse(JSON.stringify(menu));
    //2 manip copy this.state.
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
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

  return { menu, setMenu, handleAdd, handleEdit, handleDelete, resetMenu };
};
