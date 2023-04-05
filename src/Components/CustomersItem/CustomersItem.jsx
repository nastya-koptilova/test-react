import React from "react";
import s from "./CustomersItem.module.scss";

export const CustomersItem = ({
  name,
  phone,
  country,
  email,
  status,
  company,
}) => {
  return (
    <tr className={s.customers__table_body}>
      <td>{name}</td>
      <td>{company}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{country}</td>
      {status === "active" ? (
        <td>
          <p className={s.customers__table_body_active}>{status}</p>
        </td>
      ) : (
        <td>
          <p className={s.customers__table_body_inactive}>{status}</p>
        </td>
      )}
    </tr>
  );
};
