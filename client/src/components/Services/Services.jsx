import React from "react";
import { services } from "../../utils/constants";
import styles from "./Services.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Services = () => {
  return (
    <section className={cx("wrapper")}>
      <div className={cx("section-center")}>
        <article className={cx("header")}>
          <h3>
            custom furniture <br /> built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non
            aliquam voluptates dolore aut vero consequuntur.
          </p>
        </article>
        <div className={cx("services-center")}>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article className={cx("service")} key={id}>
                <span className={cx("icon")}>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
