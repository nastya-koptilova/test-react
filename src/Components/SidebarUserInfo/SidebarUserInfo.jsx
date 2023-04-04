import React from "react";

export const SidebarUserInfo = ({ user }) => {
  return (
    <div>
      <img src="" alt="Avatar" />
      <p>{user.name}</p>
      <p>{user.position}</p>
    </div>
  );
};
