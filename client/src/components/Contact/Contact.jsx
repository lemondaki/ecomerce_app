import React from "react";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Contact = () => {
  return (
    <div className={cx("contact")}>
      <div className={cx("section-center")}>
        <div className={cx("contact__heading")}>
          <h3>Join our newsletter and get 20% off</h3>
        </div>
        <div className={cx("contact__content")}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid, error hic rem ad vitae.
            Aperiam culpa consequuntur delectus reiciendis?
          </p>
          <div className={cx("wrapper_btn")}>
            <input type="text" placeholder="Enter Email" />
            <button className={cx("btn")}>subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
