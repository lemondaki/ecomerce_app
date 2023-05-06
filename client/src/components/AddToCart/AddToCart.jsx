import React from "react";
import { FaPlus, FaMinus, FaCheck } from "react-icons/fa";
import classNames from "classnames/bind";
import styles from "./AddToCart.module.scss";
const cx = classNames.bind(styles);
const AddToCart = ({ colors, amount, setMainColor, mainColor, increaseAmount, descreaseAmount }) => {
  return (
    <section className={cx("choose_product")}>
      <div className={cx("wrapper")}>
        <h5>Color:</h5>
        <div className={cx("colors")}>
          {colors?.map((color, index) => {
            return (
              <span
                key={index}
                className={cx("circle-color")}
                style={{ backgroundColor: color }}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color && <FaCheck />}
              </span>
            );
          })}
        </div>
      </div>
      <div className={cx("quantity")}>
        <FaMinus className={cx("icon-quantity")} onClick={() => descreaseAmount()} />
        <h2>{amount}</h2>
        <FaPlus className={cx("icon-quantity")} onClick={() => increaseAmount()} />
      </div>
    </section>
  );
};

export default AddToCart;
