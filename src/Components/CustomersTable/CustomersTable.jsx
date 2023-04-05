import React from "react";
import customers from "../../data/customers.json";
import { CustomersItem } from "../CustomersItem/CustomersItem";
import s from "./CustomersTable.module.scss";

export const CustomersTable = ({ searchValue }) => {
  const filtredCustomers = customers.filter((el) => {
    const arr = Object.values(el);
    if (
      arr.some((el) =>
        el.toLowerCase().includes(searchValue.toLowerCase().trim())
      )
    ) {
      return el;
    }
  });
  return (
    <table className={s.customers__table}>
      <thead>
        <tr className={s.customers__table_head}>
          <th>Customer Name</th>
          <th>Company</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Country</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {filtredCustomers.map(
          ({ name, company, country, phone, id, email, status }) => (
            <CustomersItem
              key={id}
              name={name}
              company={company}
              country={country}
              phone={phone}
              email={email}
              status={status}
            />
          )
        )}
      </tbody>
    </table>
  );
};
