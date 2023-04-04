import React, { useState } from "react";
import customers from "../../data/customers.json";
import { CustomersItem } from "../CustomersItem/CustomersItem";

export const CustomersList = ({ user }) => {
  const [members, setMembers] = useState(customers);
  const [search, setSearch] = useState("");

  const searchContact = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const filterContact = members.filter((el) => {
    const arr = Object.values(el);
    if (
      arr.some((el) => el.toLowerCase().includes(search.toLowerCase().trim()))
    ) {
      return el;
    }
  });

  
  return (
    <div>
      <p>
        Hello, <span>{user.name}</span>,
      </p>
      <div>
        <div>
          <div>
            <h3>All Customers</h3>
            <p>Active Members</p>
          </div>
          <input type="text" onChange={searchContact} />
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
            {filterContact.map(
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
