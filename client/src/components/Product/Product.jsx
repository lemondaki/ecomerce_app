import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Product.module.scss";
import classNames from "classnames/bind";
import formatPrice from "../../helper/formatPrice";
const cx = classNames.bind(styles);
const Product = ({ id, name, price, image, styleProductsList }) => {
  return (
    <div>
      <div className={cx("container")}>
        <img style={styleProductsList} src={image} alt={name} />
        <Link to={`/products/${id}`} className={cx("link")}>
          <FaSearch />
        </Link>
      </div>
      <div className={cx("description")}>
        <h5>{name}</h5>
        <p>{`${formatPrice(price)}`}</p>
      </div>
    </div>
  );
};

export default Product;
