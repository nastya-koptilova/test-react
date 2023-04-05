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
      <td data-th="Customer Name">{name}</td>
      <td data-th="Company">{company}</td>
      <td data-th="Phone Number">{phone}</td>
      <td data-th="Email">{email}</td>
      <td data-th="Country">{country}</td>
      {status === "active" ? (
        <td data-th="Status">
          <p className={s.customers__table_body_active}>{status}</p>
        </td>
      ) : (
        <td data-th="Status">
          <p className={s.customers__table_body_inactive}>{status}</p>
        </td>
      )}
    </tr>
  );
};
