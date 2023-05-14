import React from "react";
import "./Filters.css";
import Ratings from "./Ratings.js";
import { CartContextState } from "../context/Context.js";

const Filters = () => {
  const { productState, productDispatch } = CartContextState();
  console.log(
    productState.byFastDelivery,
    productState.byRating,
    productState.byStock,
    productState.sortProducts
  );
  return (
    <div className="filters">
      <h2>Filter products</h2>
      <span>
        <input
          type="radio"
          id="html"
          name="fav_language"
          value="lowToHigh"
          onChange={(e) => {
            productDispatch({
              type: "SORT_LOW_TO_HIGH",
              payload: e.target.value,
            });
          }}
        />
        <label for="html">Accending</label>
        <br />
        <input
          type="radio"
          id="html"
          name="fav_language"
          value="highToLow"
          onChange={(e) => {
            productDispatch({
              type: "SORT_LOW_TO_HIGH",
              payload: e.target.value,
            });
          }}
        />
        <label for="html">Decending</label>
        <br />
      </span>
      <span>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          onChange={() => {
            productDispatch({ type: "FILTER_BY_STOCK", payload: true });
          }}
        />
        <label for="vehicle1"> Include out of stock</label>
        <br />
        <input
          type="checkbox"
          id="vehicle2"
          name="vehicle2"
          value="Car"
          onChange={() => {
            productDispatch({ type: "FILTER_BY_DELIVERY", payload: true });
          }}
        />
        <label for="vehicle2"> Fast delivery only</label>
        <br />
      </span>
      <span>
        <label for="vehicle2"> Ratings: </label>
        <Ratings
          ratings={productState?.byRating}
          onClick={(i) => {
            productDispatch({ type: "FILTER_BY_RATING", payload: i + 1 });
          }}
          style={{ cursor: "pointer", marginRight: "4px" }}
        />
      </span>
      <button
        onClick={() => {
          productDispatch({ type: "CLEAR_FILTER" });
        }}
      >
        Clear Filter
      </button>
    </div>
  );
};

export default Filters;
