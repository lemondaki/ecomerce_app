// import actions for reducer filters
import {
  LOAD_PRODUCT,
  SET_GRID_VIEW_PRODUCT,
  SET_LIST_VIEW_PRODUCT,
  UPDATE_SORT,
  SORT_PRODUCT,
  UPDATE_FILTER,
  FILTER_PRODUCT,
  CLEAR_FILTER,
} from "../utils/action";

// function reducer filter
const reducerFilter = (state, action) => {
  // when dispatch LOAD_PRODUCT action
  if (action.type === LOAD_PRODUCT) {
    let max_price = action.payload.map((product) => product.price);
    max_price = Math.max(...max_price);
    return {
      ...state,
      filter_products: [...action.payload],
      all_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price,
        price: max_price,
      },
    };
  }

  // when dispatch SET_LIST_VIEW_PRODUCT action
  if (action.type === SET_LIST_VIEW_PRODUCT) {
    return {
      ...state,
      grid_view: false,
    };
  }

  // when dispatch SET_GRID_VIEW_PRODUCT action
  if (action.type === SET_GRID_VIEW_PRODUCT) {
    return {
      ...state,
      grid_view: true,
    };
  }

  // when dispatch UPDATE_SORT action
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }

  // when dispatch UPDATE_FILTER action
  if (action.type === UPDATE_FILTER) {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }

  // when dispatch CLEAR_FILTER action
  if (action.type === CLEAR_FILTER) {
    return {
      ...state,
      filters: {
        ...state.filters,
        category: "all",
        company: "all",
        colors: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  // when dispatch FILTER_PRODUCT action
  if (action.type === FILTER_PRODUCT) {
    // state of filters after have some event click, change...
    const { text, category, company, colors, max_price, price, shipping } = state.filters;

    // get copy array of all_products
    let tempFilter_product = [...state.all_products];

    // filter by text search
    if (text) {
      tempFilter_product = tempFilter_product.filter((p) => p.name.startsWith(text));
    }

    // filter by category
    if (category !== "all") {
      tempFilter_product = tempFilter_product.filter((p) => p.category === category);
    }

    // filter by company
    if (company !== "all") {
      tempFilter_product = tempFilter_product.filter((p) => p.company === company);
    }

    // filter by colors
    if (colors !== "all") {
      tempFilter_product = tempFilter_product.filter((p) => p.colors.find((c) => c === colors));
    }

    // filter by price
    if (price) {
      tempFilter_product = tempFilter_product.filter((p) => p.price * 1 <= price * 1);
    }

    // filter by shipping
    if (shipping) {
      tempFilter_product = tempFilter_product.filter((p) => p.shipping === true);
    }

    return {
      ...state,
      filter_products: tempFilter_product,
    };
  }

  // when dispatch SORT_PRODUCT action
  if (action.type === SORT_PRODUCT) {
    let sortProduct = [...state.filter_products];

    // sort with price lowest
    if (state.sort === "price-lowest") {
      sortProduct = sortProduct.sort((a, b) => a.price - b.price);
    }

    /// sort with price highest
    if (state.sort === "price-highest") {
      sortProduct = sortProduct.sort((a, b) => b.price - a.price);
    }

    /// sort with name a-z
    if (state.sort === "name-a") {
      sortProduct = sortProduct.sort((a, b) => a.name.localeCompare(b.name));
    }

    /// sort with name z-a
    if (state.sort === "name-z") {
      sortProduct = sortProduct.sort((a, b) => b.name.localeCompare(a.name));
    }

    return {
      ...state,
      filter_products: sortProduct,
    };
  }
};

export default reducerFilter;
