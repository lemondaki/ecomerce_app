import React from "react";
import styles from "./Sort.module.scss";
import classNames from "classnames/bind";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterProduct } from "../../context/FilterContext";
const cx = classNames.bind(styles);
const Sort = () => {
  const { filter_products: products, grid_view, setGridView, setListView, updateSort } = useFilterProduct();
  return (
    <section className={cx("section__product-header")}>
      <div className={cx("btn-container")}>
        <button className={cx(`${grid_view && "active"}`)}>
          <BsFillGridFill className={cx("btn-icon")} onClick={() => setListView()} />
        </button>
        <button>
          <BsList className={cx(`${!grid_view && "active"}`)} onClick={() => setGridView()} />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select name="sort" id="sort" className="sort-input" onChange={updateSort}>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;
