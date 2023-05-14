export const cartReducer = (state, action) => {
  switch (action.type) {
    // jodi kono crud operation perfom korte hoi tahole ekhne hobe
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_TO_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.userId !== action.payload.userId),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.userId === action.payload.userId
            ? (c.qty = action.payload.qty)
            : c.qty
        ),
      };

    // case "SORT_BY_PRICE":
    //   return { ...state, sortProducts: action.paylaod };

    // case "FILTER_BY_STOCK":
    //   return { ...state, byStock: !state.byStock };

    // case "FILTER_BY_DELIVERY":
    //   return { ...state, byFastDelivery: !state.byFastDelivery };

    // case "FILTER_BY_RATING":
    //   return { ...state, byRating: action.payload };

    // case "CLEAR_FILTER":
    //   return { byStock: false, byFastDelivery: false, byRating: 0 };

    default:
      return state;
  }
};

// for sorting
export const productReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };

    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };

    case "SORT_LOW_TO_HIGH":
      return { ...state, sortProducts: action.paylaod };

    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };

    case "CLEAR_FILTER":
      return {
        byStock: false,
        byFastDelivery: false,
        sortProducts: "not_sort",
        byRating: 0,
      };

    default:
      break;
  }
};
