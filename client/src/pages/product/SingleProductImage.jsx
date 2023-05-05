import React from "react";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SingleProductImage.module.scss";
const cx = classNames.bind(styles);
const SingleProductImage = ({ singleProduct }) => {
  const { images = [{ url: "", id: "" }] } = singleProduct;
  const [imageMain, setImageMain] = useState(images[0]);
  return (
    <div className={cx("wrapper-image")}>
      <section className={cx("product__image")}>
        <img src={imageMain.url} alt="main image" />
      </section>
      <section className={cx("gallary")}>
        {images.map((image) => {
          return (
            <img
              className={cx(`${imageMain.id === image.id && "active"}`)}
              src={image.url}
              key={image.id}
              alt={image.filename}
              onClick={() => setImageMain(image)}
            />
          );
        })}
      </section>
    </div>
  );
};

export default SingleProductImage;
