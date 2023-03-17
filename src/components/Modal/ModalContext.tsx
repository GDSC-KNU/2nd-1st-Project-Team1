import { createContext, useContext } from "react";

export const ModalContext = createContext(false);
export const useMyContext = () => {
  const value = useContext(ModalContext);
  if (value === undefined) {
    throw new Error("useMyContext should be used within MyContext.Provider");
  }
};
