import React from "react";
import styles from "./ErrorPage.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const ErrorPage = () => {
  return (
    <section className={cx('wapper')}>
      <h1>404</h1>
      <h3>Sorry, the page you tried cannot be found</h3>
      <Link to="/" className='btn'>
        back home
      </Link>
    </section>
  );
};

export default ErrorPage;
