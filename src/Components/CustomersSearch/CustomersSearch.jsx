import s from "./CustomersSearch.module.scss";

export const CustomersSearch = ({ handleChange }) => {
  const handleSearchCustomers = (event) => {
    const value = event.target.value;
    handleChange(value);
  };

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
