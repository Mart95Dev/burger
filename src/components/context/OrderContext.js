import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isReduce: false,
  setIsReduce: () => {},
  isTabActive: "",
  setIsTabActive: () => {},
  tabSelected: "add",
  setTabSelected: () => {},
});
