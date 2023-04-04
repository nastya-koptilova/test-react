import React from "react";
import { SidebarLink } from "../SidebarLink/SidebarLink";
import { SidebarUserInfo } from "../SidebarUserInfo/SidebarUserInfo";

export const Sidebar = ({user}) => {
  return (
    <aside>
      <h2>Dashboard</h2>
      <h3>Dashboard</h3>
      <SidebarLink />
      <SidebarUserInfo user={user}/>
    </aside>
  );
};
