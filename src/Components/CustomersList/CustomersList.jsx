import React, { useState } from "react";
import customers from "../../data/customers.json";
import { CustomersItem } from "../CustomersItem/CustomersItem";
import { UserGreetings } from "../UserGreetings/UserGreetings";

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
    <div>
      <UserGreetings name={user.name}/>
      <div>
        <div>
          <div>
            <h3>All Customers</h3>
            <p>Active Members</p>
          </div>
          <input type="text" onChange={handleSearchCustomers} />
        </div>
        <table>
          <thead>
            <tr>
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
        <div>
          <p>Showing data 1 to 8 of 256K entries</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};
