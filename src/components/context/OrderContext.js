import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isreduce: false,
  setIsReduceAdmin: () => {},
  isTabActive: false,
  setIsTabActive: () => {},
});
