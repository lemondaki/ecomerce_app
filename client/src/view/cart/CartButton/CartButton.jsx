import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./CartButton.module.scss";
import classNames from "classnames/bind";
import { useCartContext } from "../../../context/CartContext";
const cx = classNames.bind(styles);
const CartButton = () => {
  const { total_item } = useCartContext();
  return (
    <div className={cx("cart-btn")}>
      <span className={cx("cart-title")}>Cart</span>
      <span className={cx("btn-shopping-cart")}>
        <FaShoppingCart />
        <div className={cx("cart-number")}>
          <span>{total_item}</span>
        </div>
      </span>
    </div>
  );
};

export default CartButton;
