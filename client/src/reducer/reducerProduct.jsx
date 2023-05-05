import React from "react";
import {
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../utils/action.jsx";
const reducer_products = (state, action) => {
  if (action.type === GET_PRODUCT_BEGIN) {
    return { ...state, products_loading: true };
  }

  if (action.type === GET_PRODUCT_SUCCESS) {
    const featured_products = action.payload.filter((product) => product.featured === true);
    return { ...state, products_loading: false, featured_products, products: action.payload };
  }

  if (action.type === GET_PRODUCT_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, singleProduct_loading: true };
  }

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return { ...state, singleProduct_loading: false, singleProduct: action.payload };
  }

  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, singleProduct_loading: false, singleProduct_error:true };
  }
  
  throw Error(`No matching ${action.type} - action type`);
};
export { reducer_products };
