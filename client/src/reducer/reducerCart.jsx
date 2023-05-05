import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_SHOPPING_CART,
  INCREASE_AMOUNT,
  DESCREASE_AMOUNT,
  COUNT_TOTAL_PRICE,
  COUNT_TOTAL_AMOUNT,
} from "../utils/action";
const reducerCart = (state, action) => {
  // when add item to cart
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;

    // check if have the same item with same color
    // if have: update amount
    // else create a new item
    let existItem = state.cart.find((item) => item.id === id + color);
    if (existItem) {
      const updateCart = state.cart.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        return item;
      });
      console.log(updateCart);
      return { ...state, cart: updateCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        price: product.price,
        max: product.stock,
        image: product.images[0].url,
        color,
        amount,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  // when remove item out of cart
  if (action.type === REMOVE_CART_ITEM) {
    const updateCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: updateCart,
    };
  }

  // when clear shopping cart
  if (action.type === CLEAR_SHOPPING_CART) {
    return { ...state, cart: [] };
  }

  // when increase amount of item
  // change properties of 1 obj in an array: map
  if (action.type === INCREASE_AMOUNT) {
    const updateCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        let newAmount = item.amount + 1;
        if (newAmount > item.max) {
          newAmount = item.max;
        }
        return { ...item, amount: newAmount };
      }
      return item;
    });
    return { ...state, cart: updateCart };
  }

  // when descrease amount of item
  if (action.type === DESCREASE_AMOUNT) {
    const updateCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        let newAmount = item.amount - 1;
        if (newAmount < 1) {
          newAmount = 1;
        }
        return { ...item, amount: newAmount };
      }
      return item;
    });
    return { ...state, cart: updateCart };
  }

  //when cart change to caculate total price
  if (action.type === COUNT_TOTAL_PRICE) {
    const total_price = state.cart.reduce((acc, item) => acc + item.price * item.amount, 0);
    return {
      ...state,
      total_price,
    };
  }

  //when count total item every cart array change
  if (action.type === COUNT_TOTAL_AMOUNT) {
    const total_item = state.cart.reduce((acc, item) => acc + item.amount, 0);
    return {
      ...state,
      total_item,
    };
  }
};

export default reducerCart;
