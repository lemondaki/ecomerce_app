import React from "react";
import Product from "../../components/Product/Product";
import styles from "./GridView.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const GridView = ({ filter_products }) => {
  return (
    <div className={cx("products-container")}>
      {filter_products.map((product,index) => {
        return <Product key={index} {...product} styleProductsList={{ maxHeight: "175px" }} />;
      })}
    </div>
  );
};

export default GridView;
