import React from "react";
import Ratings from "./Ratings.js";
import { CartContextState } from "../context/Context.js";

const SingleProduct = ({ prod }) => {
  // const [state, dispatch] = CartContextState();

  const { state, dispatch } = CartContextState();
  let cartArray = state.cart;

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={prod.image} alt={prod.name} />
        <div className="card-body">
          <h5 className="card-title">{prod.name}</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "-10px",
            }}
          >
            <p style={{ fontWeight: "bold" }}>Stock: {prod.inStock}</p>
            <p style={{ fontWeight: "bold" }}>
              Price: {prod.price?.split(".")[0]}
            </p>
            {/* <p>Ratings: {prod.ratings}</p> */}
          </div>
          <span style={{ fontWeight: "bold", color: "gray" }}>
            {prod.fastDelivery ? "Fast delivery" : "4 days to delivery"}
          </span>
          <p style={{ fontWeight: "bold" }}>
            Ratings: <Ratings disabled ratings={prod.ratings}></Ratings>
          </p>
          <div>
            {/* {cartArray.some((p) => p.id === prod.id) ? ( */}
            {cartArray.some((c) => c.userId === prod.userId) ? (
              <button
                className="btn btn-danger"
                onClick={() =>
                  dispatch({ type: "REMOVE_TO_CART", payload: prod })
                }
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="btn btn-primary"
                disabled={!prod.inStock}
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: prod })}
              >
                {!prod.inStock ? "Out of stock" : `Add to Cart`}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
