import React from "react";
import styles from "./ErrorProduct.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const ErrorProduct = () => {
  return (
    <div className="section-center">
      <div className={cx("wrapper")}>
        <h1>There was an error...</h1>
      </div>
    </div>
  );
};

export default ErrorProduct;
