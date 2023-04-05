import { createPortal } from "react-dom";
import { useEffect } from "react";
import { SidebarLink } from "../SidebarLink/SidebarLink";
import { SidebarUserInfo } from "../SidebarUserInfo/SidebarUserInfo";
import s from "./ModalMenu.module.scss";

const modalRoot = document.querySelector("#modal-root");

export const ModalMenu = ({ onClose, isModalOpen, user }) => {
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onModalClose = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    isModalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");

    window.addEventListener("keydown", onModalClose);

    return () => {
      window.removeEventListener("keydown", onModalClose);
    };
  }, [onClose, isModalOpen]);

  return createPortal(
    <>
      <div
        onClick={handleBackdropClick}
        className={isModalOpen ? s.backdrop : s.backdrop_hidden}
      >
        <div className={isModalOpen ? s.modal : s.transition}>
          <h3 className={s.sidebarList__title}>Dashboard</h3>
          <SidebarLink />
          <SidebarUserInfo user={user} />
        </div>
      </div>
    </>,
    modalRoot
  );
};
