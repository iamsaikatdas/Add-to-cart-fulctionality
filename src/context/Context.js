import { faker } from "@faker-js/faker";
import React, { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./CartReducer.js";

export const cartContext = createContext();

const Context = ({ children }) => {
  // generate fake json data using faker
  faker.seed(100);
  const productArray = [];

  function createRandomUser() {
    return {
      userId: faker.datatype.uuid(),
      name: faker.name.firstName(),
      price: faker.commerce.price(),
      image: faker.image.cats(),
      inStock: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5]),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    };
  }
  Array.from({ length: 20 }).forEach(() => {
    productArray.push(createRandomUser());
  });
  // console.log(productArray);

  //  user Reducer for products and cart
  const [state, dispatch] = useReducer(cartReducer, {
    products: productArray,
    cart: [],
  });

  //  user Reducer for sort the products in varient type of works
  const [productState, productDispatch] = useReducer(productReducer, {
    sortProducts: "not_sort",
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
  });

  return (
    <cartContext.Provider
      value={{ state, dispatch, productState, productDispatch }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const CartContextState = () => {
  return useContext(cartContext);
};
export default Context;
