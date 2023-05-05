import React from "react";
import classNames from "classnames/bind";
import styles from "./CardPage.module.scss";
import PageHero from "../../components/PageHero/PageHero";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/CartContext";
import { UserAuth } from "../../context/AuthContext";
import formatPrice from "../../helper/formatPrice";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const CartPage = () => {
  const { total_price, shipping_fee, cart, removeCartItem, clearShoppingCart, increaseAmount, descreaseAmount } =
    useCartContext();
  const { user } = UserAuth();
  if (cart.length < 1) {
    return (
      <div className="section-center">
        <div className={cx("empty")}>
          <h2>Your cart is empty...</h2>
          <Link to="/products">
            <button className="btn">Fill it</button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <PageHero title=" Cart" />
      <div className={cx("wrapper")}>
        <div className="section-center">
          <section className={cx("content")}>
            <span className={cx("item")}>item</span>
            <span className={cx("price")}>price</span>
            <span>quantity</span>
            <span className={cx("subtotal")}>subtotal</span>
          </section>
          <hr />
          {cart.map((c) => {
            const { id, name, price, image, color, amount } = c;
            return (
              <article key={id} className={cx("infor-payment")}>
                <div className={cx("product")}>
                  <img src={image} alt={name} />
                  <div className={cx("infor")}>
                    <h3 className={cx("title")}>{name}</h3>
                    <div className={cx("color")}>
                      <p>Color:</p>
                      <span style={{ backgroundColor: color }}></span>
                    </div>
                  </div>
                </div>
                <div className={cx("price")}>
                  <p>{formatPrice(price)}</p>
                </div>
                <div className={cx("quantity")}>
                  <FaMinus className={cx("btn-icon")} onClick={() => descreaseAmount(id)} />
                  <h2>{amount}</h2>
                  <FaPlus className={cx("btn-icon")} onClick={() => increaseAmount(id)} />
                </div>
                <div className={cx("subtotal")}>
                  <p>{formatPrice(amount * price)}</p>
                </div>
                <div className={cx("btn-delete")}>
                  <span onClick={() => removeCartItem(id)}>
                    <FaTrash />
                  </span>
                </div>
              </article>
            );
          })}
          <hr />
          <div className={cx("container")}>
            <Link to="/products">
              <button className="btn">continue shopping</button>
            </Link>
            <button className={cx("btn", "btn-clear")} onClick={clearShoppingCart}>
              clear shopping cart
            </button>
          </div>
          <div className={cx("total-wrapper")}>
            <section>
              <article className={cx("total-order")}>
                <h5>
                  subtotal :<span>{formatPrice(total_price)}</span>
                </h5>
                <p>
                  shipping fee :<span>{formatPrice(shipping_fee)}</span>
                </p>
                <h4>
                  order total :<span>{formatPrice(total_price + shipping_fee)}</span>
                </h4>
              </article>
              {user ? (
                <Link to="/checkout" className={cx("btn", "btn-checkout")}>
                  proceed to checkout
                </Link>
              ) : (
                <Link to="/login" className={cx("text-deco")}>
                  <button className={cx("btn", "btn-checkout")}>Login to checkout</button>
                </Link>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
