import React, { useState, useEffect } from "react";
import PageHero from "../../components/PageHero/PageHero";
import classNames from "classnames/bind";
import style from "./Checkout.module.scss";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import formatPrice from "../../helper/formatPrice";
import StripeCheckout from "react-stripe-checkout";
import { UserAuth } from "../../context/AuthContext";
import { useCartContext } from "../../context/CartContext";
const cx = classNames.bind(style);
const Checkout = () => {
  const { user } = UserAuth();
  const { cart, shipping_fee, total_price, clearShoppingCart } = useCartContext();
  const [pay, setPay] = useState(false);
  const naviagate = useNavigate();

  const handleClearCart = () => {
    clearShoppingCart();
    naviagate("/");
  };

  const payment = async (token) => {
    setTimeout(() => {
      handleClearCart();
    }, 2000);
    await axios.post("https://testapp-s8iy.onrender.com/checkout", {
      amount: total_price + shipping_fee,
      token: token,
    });
  };

  return (
    <div className={cx("wrapper")}>
      <PageHero title="checkout" />
      <section className={cx("checkout")}>
        {cart.length > 0 ? (
          <div className={cx("box-infor")}>
            <h2>Hello, {user.displayName || user.email}</h2>
            <p>Your total is {formatPrice(total_price + shipping_fee)}</p>
            <p className="cart-number">Test Card Number: 4242 4242 4242 4242</p>
            <StripeCheckout
              stripeKey="pk_test_51N4JCxCeqgiHvrRKC5aBL6EGoI8bnCLBCLiqDpwBh6yzGBfZzgxj8qK0C551kel6H1o0Nwx3EgRw7PaR1o59fsh90019XHnL5M"
              name="The Comfy Sloth" // the pop-in header title
              description="Payment" // the pop-in header subtitle
              ComponentClass="div"
              label="Pay to Comfy Sloth"
              panelLabel="Pay total" // prepended to the amount in the bottom pay button
              amount={total_price + shipping_fee} // cents
              currency="USD"
              token={payment}
              email={user.email}
            />
          </div>
        ) : (
          <div className="section-center">
            <div className={cx("empty")}>
              <h2>Your cart is empty...</h2>
              <Link to="/products">
                <button className="btn">Fill it</button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Checkout;
