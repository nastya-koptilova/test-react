import React from "react";
import s from "./CustomersSearch.module.scss";

export const CustomersSearch = ({handleSearchCustomers}) => {
  return (
    <label className={s.customers__search}>
      <input
        className={s.customers__search_input}
        type="text"
        onChange={handleSearchCustomers}
        placeholder="Search"
      />
    </label>
  );
};
