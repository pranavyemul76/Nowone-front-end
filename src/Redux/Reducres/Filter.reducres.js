import { type } from "../Constants";
const initialstate = {
  Filterproducts: [],
  cartdata: localStorage.getItem("nos") || 0,
  headerdata: [],
};

export const Filterreducres = (state = initialstate, action) => {
  switch (action.type) {
    case type.FILTER:
      return { ...state, Filterproducts: action.data };

    case type.CART:
      return { ...state, cartdata: action.data };

    case type.HEADER:
      return { ...state, headerdata: action.data };
    default:
      return state;
  }
};
