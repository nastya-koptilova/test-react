import React from "react";

export const CustomersItem = ({
  name,
  phone,
  country,
  email,
  status,
  company,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{company}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{country}</td>
      <td>{status}</td>
    </tr>
  );
};
