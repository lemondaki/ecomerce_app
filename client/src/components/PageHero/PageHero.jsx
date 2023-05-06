import React from "react";
import styles from "./PageHero.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const PageHero = ({ title, singleProduct }) => {
  return (
    <section className={cx("section-hero")}>
      <div className="section-center">
        <h3>
          <Link to="/" className={cx("title")}>
            Home /
          </Link>
            {singleProduct && (
              <Link className={cx("title")} to="/products">
                Product /
              </Link>
            )}
          {title}
        </h3>
      </div>
    </section>
  );
};

export default PageHero;
