import React from "react";
import styles from "./SingleProductPage.module.scss";
import classNames from "classnames/bind";
import { useProductContext } from "../../context/ProductContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { single_product_url as url } from "../../utils/constants";
import LoadingProduct from "../../components/LoadingProduct/LoadingProduct";
import ErrorProduct from "../../components/ErrorProduct/ErrorProduct";
import PageHero from "../../components/PageHero/PageHero.jsx";
import SingleProductImage from "./SingleProductImage";
import SingleProductDescp from "./SingleProductDescp";
const cx = classNames.bind(styles);
const SingleProductPage = () => {
  const { id } = useParams();
  const naviagte = useNavigate();
  const { singleProduct_loading, singleProduct_error, fetchSingleProduct, singleProduct } = useProductContext();
  useEffect(() => {
    if (singleProduct_error) {
      const timer = setTimeout(() => {
        naviagte("/");
      }, 3000);
      // cleanUp function
      return () => clearTimeout(timer);
    }
  }, [singleProduct_error]);

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  if (singleProduct_loading) {
    return <LoadingProduct />;
  }

  if (singleProduct_error) {
    return <ErrorProduct />;
  }

  return (
    <>
      <PageHero  singleProduct />
      <div className="section-center">
        <div className={cx("wrapper")}>
          <Link to="/products" className="btn">
            back to products
          </Link>
          <div className={cx("product-center")}>
            <SingleProductImage singleProduct={singleProduct} />
            <SingleProductDescp singleProduct={singleProduct} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
