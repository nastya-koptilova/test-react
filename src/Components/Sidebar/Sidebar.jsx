import React from "react";
import { SidebarLink } from "../SidebarLink/SidebarLink";
import { SidebarUserInfo } from "../SidebarUserInfo/SidebarUserInfo";
import s from "./Sidebar.module.scss";

export const Sidebar = ({user}) => {
  return (
    <aside className={s.sidebar}>
      <h2 className={s.sidebar__title}>Dashboard<span className={s.sidebar__title_vers}>v.01</span></h2>
      <h3 className={s.sidebarList__title}>Dashboard</h3>
      <SidebarLink />
      <SidebarUserInfo user={user}/>
    </aside>
  );
};
