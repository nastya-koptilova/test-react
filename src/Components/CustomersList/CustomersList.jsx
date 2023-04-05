import React, { useState } from "react";
import { UserGreetings } from "../UserGreetings/UserGreetings";
import s from "./CustomersList.module.scss";
import { CustomersSearch } from "../CustomersSearch/CustomersSearch";
import { CustomersTable } from "../CustomersTable/CustomersTable";
import { PaginationBtn } from "../PaginationBtn/PaginationBtn";

export const CustomersList = ({ user }) => {
  const [search, setSearch] = useState("");

  const handleSearchCustomers = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <div className={s.customers}>
      <UserGreetings name={user.name} />
      <div className={s.customers__container}>
        <div className={s.customers__description_container}>
          <h3 className={s.customers__title}>All Customers</h3>
          <p className={s.customers__description}>Active Members</p>
          <CustomersSearch onChange={handleSearchCustomers}/>
        </div>
        <CustomersTable searchValue={search}/>
        <div className={s.customers__pages}>
          <p className={s.customers__pages_text}>
            Showing data 1 to 8 of 256K entries
          </p>
          <PaginationBtn/>
        </div>
      </div>
    </div>
  );
};
