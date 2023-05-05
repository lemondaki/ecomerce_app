import React from "react";
import classNames from "classnames/bind";
import styles from "./Stars.module.scss";
const cx = classNames.bind(styles)
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
const Stars = ({ stars }) => {
  const formatStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span className={cx("star-icon")} key={index}>
        {stars > index + 1 ? <BsStarFill /> : stars >= number ? <BsStarHalf /> : <BsStar />}
      </span>
    );
  });
  return formatStars;
};

export default Stars;
