import React from "react";
import { createContext, useContext, useReducer, useEffect } from "react";
import reducerCart from "../reducer/reducerCart";
import {
  ADD_TO_CART,
  CLEAR_SHOPPING_CART,
  REMOVE_CART_ITEM,
  INCREASE_AMOUNT,
  DESCREASE_AMOUNT,
  COUNT_TOTAL_PRICE,
  COUNT_TOTAL_AMOUNT,
} from "../utils/action";
const CartContext = createContext();
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  }
  return [];
};

const initialState = {
  cart: getLocalStorage(),
  total_item: 0,
  total_price: 0,
  shipping_fee: 535,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerCart, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: COUNT_TOTAL_PRICE });
    dispatch({ type: COUNT_TOTAL_AMOUNT });
  }, [state.cart]);

  const increaseAmount = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: id });
  };

  const descreaseAmount = (id) => {
    dispatch({ type: DESCREASE_AMOUNT, payload: id });
  };

  const removeCartItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const clearShoppingCart = () => {
    dispatch({ type: CLEAR_SHOPPING_CART });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeCartItem, clearShoppingCart, increaseAmount, descreaseAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext);
};
export default CartProvider;
