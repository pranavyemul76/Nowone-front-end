import { type } from "../Constants";
export const Filterproducts = (data) => {
  return { type: type.FILTER, data: data };
};
export const Cart = (data) => {
  return { type: type.CART, data: data };
};
export const Headerdata = (data) => {
  return { type: type.HEADER, data: data };
};
