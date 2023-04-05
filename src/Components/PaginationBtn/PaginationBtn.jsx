import React from "react";
import s from "./PaginationBtn.module.scss";

export const PaginationBtn = () => {
  return (
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
  );
};
