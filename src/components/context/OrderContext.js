import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  tabIconSelected: false,
  setTabIconSelected: () => {},
  tabSelected: "add",
  setTabSelected: () => {},
  isCollasped: false,
  setIsCollasped: () => {},

  menu: {},
  handleAdd: () => {},
  resetMenu: () => {},
  handleDelete: () => {},
  handleEdit: () => {},

  setNewProduct: () => {},
  newProduct: {},
  productSelected: {},
  setproductSelected: () => {},

  titleEditRef: {},
});
