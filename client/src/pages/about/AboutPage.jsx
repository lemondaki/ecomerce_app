import React from "react";
import styles from "./AboutPage.module.scss";
import classNames from "classnames/bind";
import aboutImg from "../../assets/hero-bcg.jpeg";
import PageHero from "../../components/PageHero/PageHero";
const cx = classNames.bind(styles);
const AboutPage = () => {
  return (
    <>
      <PageHero title={'about'}/>
      <section className="section-center">
        <div className={cx("wrapper-about")}>
          <div className={cx("wrapper-img")}>
            <img src={aboutImg} alt="about image" />
          </div>
          <div className={cx("article")}>
            <h2>our story</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore
              esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos
              quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur
              architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique
              amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
