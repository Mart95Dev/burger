import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isReduce: false,
  setIsReduce: () => {},
  tabIconSelected: false,
  setTabIconSelected: () => {},
  tabSelected: "add",
  setTabSelected: () => {},
});
