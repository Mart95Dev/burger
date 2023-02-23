import { createContext } from "react";

export default createContext({
  nameProduct: "",
  setNameProduct: () => {},
  url: "",
  setUrl: () => {},
  price: "",
  setPrice: () => {},
  stock: true,
  setStock: () => {},
  pub: false,
  setPub: () => {},
});
