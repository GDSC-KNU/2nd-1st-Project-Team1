import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import {
  BackgroundWrapper,
  ModalContainer,
  ModalContainerVars,
} from "./BackgroundModal.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface BackgroundModalProps {
  children: ReactElement;
  width: string;
  p: string;
  onClick?: () => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BackgroundModal = ({
  children,
  width,
  p,
  onClick,
  openModal,
  setOpenModal,
}: BackgroundModalProps) => {
  const [showModal, setShowModal] = useState<boolean>(openModal);
  const closeModal = () => {
    if (onClick) {
      onClick();
    } else {
      setShowModal(false);
      setOpenModal(false);
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
