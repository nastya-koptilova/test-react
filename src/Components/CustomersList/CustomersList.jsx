import React, { useState } from "react";
import customers from "../../data/customers.json";
import { CustomersItem } from "../CustomersItem/CustomersItem";
import { UserGreetings } from "../UserGreetings/UserGreetings";
import s from "./CustomersList.module.scss";

export const CustomersList = ({ user }) => {
  const [members, setMembers] = useState(customers);
  const [search, setSearch] = useState("");

  const handleSearchCustomers = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const filtredCustomers = members.filter((el) => {
    const arr = Object.values(el);
    if (
      arr.some((el) => el.toLowerCase().includes(search.toLowerCase().trim()))
    ) {
      return el;
    }
  });

  return (
    <div className={s.customers}>
      <UserGreetings name={user.name} />
      <div className={s.customers__container}>
        <div className={s.customers__description_container}>
          <h3 className={s.customers__title}>All Customers</h3>
          <p className={s.customers__description}>Active Members</p>
          <label className={s.customers__search}>
            <input
              className={s.customers__search_input}
              type="text"
              onChange={handleSearchCustomers}
              placeholder="Search"
            />
          </label>
        </div>
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
        <div className={s.customers__pages}>
          <p className={s.customers__pages_text}>
            Showing data 1 to 8 of 256K entries
          </p>
          <div className={s.customers__pages_pagination}>
            <button className={s.customers__pages_pagination_btn} type="button">
              &lt;
            </button>
            <button
              className={`${s.customers__pages_pagination_btn} ${s.customers__pages_pagination_btn_active}`}
              type="button"
            >
              1
            </button>
            <button className={s.customers__pages_pagination_btn} type="button">
              2
            </button>
            <button className={s.customers__pages_pagination_btn} type="button">
              3
            </button>
            <button className={s.customers__pages_pagination_btn} type="button">
              4
            </button>
            <p className={s.customers__pages_pagination_etc}>...</p>
            <button className={s.customers__pages_pagination_btn} type="button">
              40
            </button>
            <button className={s.customers__pages_pagination_btn} type="button">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
