import React, { useState } from "react";
import { UserGreetings } from "../UserGreetings/UserGreetings";
import { CustomersSearch } from "../CustomersSearch/CustomersSearch";
import { CustomersTable } from "../CustomersTable/CustomersTable";
import { PaginationBtn } from "../PaginationBtn/PaginationBtn";
import s from "./CustomersList.module.scss";

export const CustomersList = ({ user }) => {
  const [search, setSearch] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSearchCustomers = (value) => {
    setSearch(value);
  };

  const handleActiveCustomers = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <div className={s.customers}>
      <UserGreetings name={user.name} />
      <div className={s.customers__container}>
        <div className={s.customers__description_container}>
          <h3 className={s.customers__title}>All Customers</h3>
          <button
            type="button"
            className={s.customers__active}
            onClick={handleActiveCustomers}
          >
            Active Members
          </button>
          <CustomersSearch handleChange={handleSearchCustomers} />
        </div>
        <CustomersTable active={isActive} searchValue={search} />
        <div className={s.customers__pages}>
          <p className={s.customers__pages_text}>
            Showing data 1 to 8 of 256K entries
          </p>
          <PaginationBtn />
        </div>
      </div>
    </div>
  );
};
