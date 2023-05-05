import React from "react";
import classNames from "classnames/bind";
import styles from "./SingleProductDescp.module.scss";
import AddToCart from "../../features/AddToCart/AddToCart";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import formatPrice from "../../helper/formatPrice.jsx";
import Stars from "../../components/Stars/Stars";
const cx = classNames.bind(styles);
const SingleProductDescp = ({ singleProduct }) => {
  const { name, price, description, stock, colors, stars, reviews, id: sku, company } = singleProduct;
  const { addToCart } = useCartContext();
  const [mainColor, setMainColor] = useState(colors?.at(0) ?? []);
  const [amount, setAmount] = useState(1);
  const increaseAmount = () => {
    if (amount === stock) return;
    setAmount(amount + 1);
  };
  const descreaseAmount = () => {
    if (amount === 1) return;
    setAmount(amount - 1);
  };
  return (
    <article className={cx("product__descp")}>
      <h2 className={cx("product-name")}>{name}</h2>
      <div className={cx("wrapper__review")}>
        <span className={cx("review__star")}>
          <Stars stars={stars} />
        </span>
        <span className={cx("number-customer")}>({reviews} customer reviews)</span>
      </div>
      <h5 className={cx("price")}>{formatPrice(price)}</h5>
      <p className={cx("descp")}>{description}</p>
      <div className={cx("infor__product")}>
        <div className={cx("wrapper")}>
          <h5>Available:</h5>
          <span>{stock > 0 ? "In stock" : "Out of stock"}</span>
        </div>
        <div className={cx("wrapper")}>
          <h5>SKU:</h5>
          <span>{sku}</span>
        </div>
        <div className={cx("wrapper")}>
          <h5>Brand:</h5>
          <span>{company}</span>
        </div>
      </div>
      <hr />
      <AddToCart
        colors={colors}
        amount={amount}
        setMainColor={setMainColor}
        mainColor={mainColor}
        increaseAmount={increaseAmount}
        descreaseAmount={descreaseAmount}
      />
      {stock > 0 && (
        <Link
          to="/cart"
          className={cx("btn", "btn-add-cart")}
          onClick={() => addToCart(sku,mainColor,amount,singleProduct)}
        >
          add to cart
        </Link>
      )}
    </article>
  );
};

export default SingleProductDescp;
