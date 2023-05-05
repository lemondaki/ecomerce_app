import React from 'react'
import styles from "./LoadingProduct.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const LoadingProduct = () => {
  return (
    <div className="section-center">
      <div className={cx("wrapper")}>
        <h1>Loading...</h1>
      </div>
    </div>
  );
}

export default LoadingProduct
