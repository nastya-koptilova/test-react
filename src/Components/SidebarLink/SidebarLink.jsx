import React from "react";
import s from "./SidebarLink.module.scss";
import { ReactComponent as ProductIcon } from "../../images/product-icon.svg";
import { ReactComponent as CustomerIcon } from "../../images/customer-icon.svg";
import { ReactComponent as IncomeIcon } from "../../images/income-icon.svg";
import { ReactComponent as PromoteIcon } from "../../images/promote-icon.svg";
import { ReactComponent as HelpIcon } from "../../images/help-icon.svg";
import { ReactComponent as ArrowIcon } from "../../images/arrow.svg";

export const SidebarLink = () => {
  return (
    <ul className={s.sidebar__list}>
      <li className={s.sidebar__item}>
        <a className={s.sidebar__link} href="#">
          <div className={s.sidebar__link_container}>
            <ProductIcon className={s.sidebar__icon} />
            <p className={s.sidebar__link_text}>Product</p>
          </div>
          <ArrowIcon className={s.sidebar__icon_arrow} />
        </a>
      </li>
      <li className={`${s.sidebar__item} ${s.sidebar__item_active}`}>
        <a className={s.sidebar__link} href="#">
          <div className={s.sidebar__link_container}>
            <CustomerIcon
              className={s.sidebar__icon_active}
            />
            <p
              className={`${s.sidebar__link_text} ${s.sidebar__link_text_active}`}
            >
              Customers
            </p>
          </div>
          <ArrowIcon
            className={`${s.sidebar__icon_arrow} ${s.sidebar__icon_arrow_active}`}
          />
        </a>
      </li>
      <li className={s.sidebar__item}>
        <a className={s.sidebar__link} href="#">
          <div className={s.sidebar__link_container}>
            <IncomeIcon className={s.sidebar__icon_income} />
            <p className={s.sidebar__link_text}>Income</p>
          </div>
          <ArrowIcon className={s.sidebar__icon_arrow} />
        </a>
      </li>
      <li className={s.sidebar__item}>
        <a className={s.sidebar__link} href="#">
          <div className={s.sidebar__link_container}>
            <PromoteIcon className={s.sidebar__icon} />
            <p className={s.sidebar__link_text}>Promote</p>
          </div>
          <ArrowIcon className={s.sidebar__icon_arrow} />
        </a>
      </li>
      <li className={s.sidebar__item}>
        <a className={s.sidebar__link} href="#">
          <div className={s.sidebar__link_container}>
            <HelpIcon className={s.sidebar__icon} />
            <p className={s.sidebar__link_text}>Help</p>
          </div>
          <ArrowIcon className={s.sidebar__icon_arrow} />
        </a>
      </li>
    </ul>
  );
};
