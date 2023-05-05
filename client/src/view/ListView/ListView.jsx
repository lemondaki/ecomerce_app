import React from "react";
import { Link } from "react-router-dom";
import styles from "./ListView.module.scss";
import formatPrice from "../../helper/formatPrice";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const ListView = ({ filter_products }) => {
  return (
    <>
      {filter_products?.map((product) => {
        const { name, id, price, image, description } = product;
        return (
          <article key={id} className={cx("wrapper")}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className={cx("price")}>{formatPrice(price)}</h5>
              <p>{description.slice(0, 150)}</p>
              <Link to={`/products/${id}`} className={cx("btn", "btn-detail")}>
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ListView;
