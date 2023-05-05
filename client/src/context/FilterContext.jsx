import React from "react";
import { createContext, useContext, useReducer, useEffect } from "react";
import reducerFilter from "../reducer/reducerFilter";
import { useProductContext } from "./ProductContext";

// import actions of reducer
import {
  LOAD_PRODUCT,
  SET_LIST_VIEW_PRODUCT,
  SET_GRID_VIEW_PRODUCT,
  UPDATE_SORT,
  SORT_PRODUCT,
  UPDATE_FILTER,
  FILTER_PRODUCT,
  CLEAR_FILTER,
} from "../utils/action";
const FilterContext = createContext();

// define initialState of reducer
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    colors: "all",
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

//create Provider, wrapper with children and able to access data context
const FilterProvider = ({ children }) => {
  // use data of Product context
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducerFilter, initialState);

  // first time mounted, auto load  product
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCT, payload: products });
  }, [products]);

  // dispatch actions when filters, sort change
  useEffect(() => {
    // filter trước rồi mới trả về mảng để sort
    dispatch({ type: FILTER_PRODUCT });
    dispatch({ type: SORT_PRODUCT });
  }, [state.sort, state.filters]);

  // function update sort value when onChange select
  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  // function update filter value when change, click
  const updateFilter = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "colors") {
      value = e.target.dataset.color;
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTER, payload: { name, value } });
  };

  // clear filter
  const clear_filter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // set grid product view
  const setGridView = () => {
    dispatch({ type: SET_LIST_VIEW_PRODUCT });
  };

  // set list product view
  const setListView = () => {
    dispatch({ type: SET_GRID_VIEW_PRODUCT });
  };

  // pass funtion through value and can use anywhere with context
  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, updateSort, updateFilter, clear_filter }}>
      {children}
    </FilterContext.Provider>
  );
};

// custom context, just need call useFilterProduct to use
export const useFilterProduct = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
