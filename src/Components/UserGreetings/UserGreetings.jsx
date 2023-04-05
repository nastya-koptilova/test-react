import React from "react";
import s from "./UserGreetings.module.scss";

export const UserGreetings = ({ name }) => {
  return <p className={s.userGreetings}>Hello, {name} &#128075;,</p>;
};