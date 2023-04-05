import React, { useState } from "react";
import { useWindowSize } from "react-use";
import { SidebarLink } from "../SidebarLink/SidebarLink";
import { SidebarUserInfo } from "../SidebarUserInfo/SidebarUserInfo";
import { ModalMenu } from "../ModalMenu/ModalMenu";
import { ReactComponent as BurgerIcon } from "../../images/burger.svg";
import { ReactComponent as CloseIcon } from "../../images/close.svg";
import s from "./Sidebar.module.scss";

export const Sidebar = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width } = useWindowSize();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const onToggle = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <>
      {width < 1279 ? (
        <>
          <button onClick={onToggle} className={s.menu_button}>
            {!isModalOpen ? (
              <BurgerIcon className={s.menu_button__burger} />
            ) : (
              <CloseIcon className={s.menu_button__close} />
            )}
          </button>
          <ModalMenu isModalOpen={isModalOpen} onClose={handleModalClose} user={user} />
        </>
      ) : (
        <aside className={s.sidebar}>
          <h2 className={s.sidebar__title}>
            Dashboard<span className={s.sidebar__title_vers}>v.01</span>
          </h2>
          <h3 className={s.sidebarList__title}>Dashboard</h3>
          <SidebarLink />
          <SidebarUserInfo user={user} />
        </aside>
      )}
    </>
  );
};
