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

  setNewProduct: () => {},
  newProduct: {},
  productSelected: {},
  setproductSelected: () => {},
});
