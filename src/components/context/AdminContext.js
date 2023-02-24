import { createContext } from "react";

export default createContext({
  nameProduct: "",
  setNameProduct: () => {},
  url: "",
  setUrl: () => {},
  price: "",
  setPrice: () => {},
  isAvailable: true,
  setIsAvailable: () => {},
  isAdvertised: false,
  setIsAdvertised: () => {},
});
