import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Footer = () => {
  return (
    <footer>
      <h5>
        © {new Date().getFullYear()}
        <span> ComfySloth </span>
      </h5>
      <h5>All rights reserved</h5>
    </footer>
  );
};

export default Footer;
