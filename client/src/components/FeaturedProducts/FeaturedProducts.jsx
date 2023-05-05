import React from "react";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import styles from "./FeaturedProducts.module.scss";
import classNames from "classnames/bind";
import { useProductContext } from "../../context/ProductContext";
import LoadingProduct from "../LoadingProduct/LoadingProduct";
import ErrorProduct from "../ErrorProduct/ErrorProduct";
const cx = classNames.bind(styles);
const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    products,
    featured_products: featured,
  } = useProductContext();
  if (loading) {
    return <LoadingProduct />;
  }
  if (error) {
    return <ErrorProduct />;
  }
  return (
    <section className={cx("section-featured")}>
      <div className={cx("title")}>
        <h2>featured products</h2>
      </div>
      <div className={cx("section-center", "featured")}>
        {featured.map((product) => {
          const { id, name, price, image, colors, company } = product;
          return (
            <Product
              key={product.id}
              id={id}
              name={name}
              price={price}
              image={image}
              colors={colors}
              company={company}
            />
          );
        })}
      </div>
      <div className={cx("wrap-btn")}>
        <Link to="/products" className={cx("btn", "btn-product")}>
          all products
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
