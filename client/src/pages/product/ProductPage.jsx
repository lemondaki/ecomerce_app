import React from "react";
import styles from "./ProductPage.module.scss";
import classNames from "classnames/bind";
import PageHero from "../../components/PageHero/PageHero";
import Filters from "../../components/Filters/Filters.jsx";
import ProductList from "../../components/ProductList/ProductList.jsx";
import Sort from "../../components/Sort/Sort";
const cx = classNames.bind(styles);
const ProductPage = () => {
  return (
    <>
      <PageHero title='products' />
      <div className="section-center">
        <div className={cx("wrapper")}>
          <Filters />
          <div className={cx("wrapper__products")}>
            <Sort />
            <ProductList/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
