import React from "react";
import s from "./SidebarUserInfo.module.scss";

export const SidebarUserInfo = ({ user }) => {
  return (
    <div className={s.sidebar__user}>
      <p className={s.sidebar__user_name}>{user.name}</p>
      <p className={s.sidebar__user_position}>{user.position}</p>
    </div>
  );
};
