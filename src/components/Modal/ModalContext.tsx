import { createContext, useState } from "react";

const ModalContext = createContext({
  open: false,
  openModal: () => {
    return;
  },
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ModalProvider = ({ children }: Props): JSX.Element => {
  const [open, setOpen] = useState(false);

  const openModal = (): void => {
    setOpen(!open);
  };
  return (
    <ModalContext.Provider
      value={{
        openModal,
        open,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
