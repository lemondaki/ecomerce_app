import React, { useContext } from "react";
import heroBcg from "../../assets/hero-bcg.jpeg";
import heroBcg2 from "../../assets/hero-bcg-2.jpeg";
import styles from "./Hero.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const Hero = () => {
  return (
    <div className="section-center">
      <section className={cx("wrapper")}>
        <div className={cx("content")}>
          <h1>
            design your <br />
            comfort zone
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus
            velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
          </p>
          <Link to="/products" className={cx('btn',"btn-hero")}>
            shop now
          </Link>
        </div>
        <div className={cx("img-container")}>
          <img src={heroBcg} alt="nice table" className={cx("main-img")} />
          <img src={heroBcg2} alt="person working" className={cx("accent-im")} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
