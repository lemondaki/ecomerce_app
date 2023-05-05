import React from "react";
import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer_products as reducer } from "../reducer/reducerProduct.jsx";
import {
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../utils/action";
import { products_url as url } from "../utils/constants";
const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  singleProduct_loading: false,
  singleProduct_error: false,
  singleProduct: [],
};
const productContext = createContext();
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCT_BEGIN });
    try {
      const response = await axios(url);
      const products = response.data;
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: products });
    } catch (err) {
      dispatch({ type: GET_PRODUCT_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios(url);
      const data = response.data;
      const singleProduct = data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (err) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <productContext.Provider value={{ ...state, fetchSingleProduct: fetchSingleProduct }}>
      {children}
    </productContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(productContext);
};
