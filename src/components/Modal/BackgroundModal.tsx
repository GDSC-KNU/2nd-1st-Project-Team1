import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import {
  BackgroundWrapper,
  ModalContainer,
  ModalContainerVars,
} from "./BackgroundModal.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { ModalContext } from "./ModalContext";
import { useContext } from "react";
interface BackgroundModalProps {
  children: ReactElement;
  width: string;
  p: string;
  onClick?: () => void;
}

const BackgroundModal = ({
  children,
  width,
  p,
  onClick,
}: BackgroundModalProps) => {
  // const [showModal, setShowModal] = useState<boolean>(openModal);
  const { openModal, open } = useContext(ModalContext);
  const closeModal = () => {
    if (onClick) {
      onClick();
    } else {
      // setShowModal(false);
      // setOpenModal(false);
      openModal();
    }
  };

  return (
    <div className={BackgroundWrapper} onClick={closeModal}>
      <div
        className={ModalContainer}
        style={assignInlineVars(ModalContainerVars, {
          width: { size: width },
          padding: { p: p },
        })}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default BackgroundModal;
