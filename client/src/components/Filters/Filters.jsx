import React from "react";
import styles from "./Filters.module.scss";
import classNames from "classnames/bind";
import { FaCheck } from "react-icons/fa";
import { useFilterProduct } from "../../context/FilterContext";
import formatPrice from "../../helper/formatPrice";
const cx = classNames.bind(styles);
const Filters = () => {
  const {
    filters: { category, colors, max_price, price },
    updateFilter,
    all_products,
    clear_filter,
  } = useFilterProduct();
  const uniqueCategory = ["all", ...new Set(all_products.map((p) => p.category))];
  const uniqueCompany = ["all", ...new Set(all_products.map((p) => p.company))];
  const uniqueColor = ["all", ...new Set(all_products.flatMap((p) => p.colors))];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <input type="text" name="text" className={cx("search-input")} placeholder="Search" onChange={updateFilter} />
        <div className={cx("form-control")}>
          <h5>Category</h5>
          <div className={cx("form-category")}>
            {uniqueCategory.map((c, index) => {
              return (
                <button
                  name="category"
                  key={index}
                  className={cx("btn-category", `${c === category && "active"}`)}
                  onClick={updateFilter}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
        <div className={cx("form-control")}>
          <h5>Company</h5>
          <select name="company" className={cx("company")} onChange={updateFilter}>
            {uniqueCompany.map((c, index) => {
              return (
                <option key={index} value={c}>
                  {c}
                </option>
              );
            })}
          </select>
        </div>
        <div className={cx("form-control")}>
          <h5>Colors</h5>
          <div className={cx("colors")}>
            {uniqueColor.map((c, index) => {
              if (c === "all") {
                return (
                  <button
                    key={index}
                    name="colors"
                    data-color="all"
                    className={cx("all-btn", `${c === colors ? "active" : ""}`)}
                    onClick={updateFilter}
                  >
                    All
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  name="colors"
                  className={cx("color-btn")}
                  data-color={c}
                  onClick={updateFilter}
                  style={{ backgroundColor: c }}
                >
                  {colors === c ? <FaCheck /> : ""}
                </button>
              );
            })}
          </div>
        </div>
        <div className={cx("form-control")}>
          <h5>Price</h5>
          <p className={cx("price")}>{formatPrice(price)}</p>
          <input
            name="price"
            value={price}
            max={max_price}
            type="range"
            className="price__range"
            onChange={updateFilter}
          />
        </div>
        <div className={cx("form-control")}>
          <div className={cx("shipping")}>
            <label htmlFor="">Free Shipping</label>
            <input type="checkbox" name="shipping" className={cx("btn-check")} onChange={updateFilter} />
          </div>
        </div>
        <button type="button" className={cx("btn", "clear-btn")} onClick={clear_filter}>
          clear filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
