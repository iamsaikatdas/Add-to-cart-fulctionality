import React, { useEffect, useState } from "react";
import Layout from "./Layout.js";
import { CartContextState } from "../context/Context.js";
import Ratings from "./Ratings.js";

const Cart = () => {
  // cart context
  const { state, dispatch } = CartContextState();
  let prod = state.cart;
  // [...Array(prod[0].inStock).keys()].map((e) => {
  //   console.log(e + 1);
  // });

  // console.log("Cart length", prod.length);
  // calculate the total price
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(
      prod.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [prod]);

  return (
    <Layout>
      <div className="cart" style={{ display: "flex" }}>
        {prod.length > 0 ? (
          <>
            <div className="cart-product" style={{ flex: 1 }}>
              {prod?.map((e) => (
                <ol className="list-group list-group">
                  <li
                    className="list-group-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      src={e.image}
                      alt={e.name}
                      style={{ width: "150px", borderRadius: "5px" }}
                    />
                    <span>{e.name}</span>
                    <span>
                      {" "}
                      <Ratings ratings={e.ratings} />{" "}
                    </span>
                    <span>$ {e.price}</span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {/* <button onClick={countHandel}>-</button>
            <span style={{ margin: "0 8px 0 8px" }}>{count}</span>
            <button onClick={countHandel}>+</button> */}
                      <select
                        name="itemSelect"
                        id="itemsOfSelect"
                        style={{
                          padding: "3px 15px",
                          outline: "none",
                        }}
                        onChange={(c) => {
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: { userId: e.userId, qty: c.target.value },
                          });
                        }}
                      >
                        {[...Array(e.inStock).keys()]?.map((s) => (
                          <option value={s + 1}>{s + 1}</option>
                        ))}
                      </select>
                    </span>
                    <span>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          dispatch({ type: "REMOVE_TO_CART", payload: e })
                        }
                      >
                        Remove
                      </button>
                    </span>
                  </li>
                </ol>
              ))}
            </div>
            <div
              className="cart-product-details"
              style={{
                width: "400px",
                marginLeft: "20px",
                marginTop: "50px",
                textAlign: "left",
              }}
            >
              <div className="list-group">
                <button
                  type="button"
                  className="list-group-item list-group-item-action active"
                  aria-current="true"
                  style={{
                    fontSize: "25px",
                    textAlign: "center",
                    cursor: "none",
                  }}
                >
                  Move to order
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  style={{ cursor: "none" }}
                >
                  Subtotal items is - ( {prod.length} )
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  style={{ cursor: "none" }}
                >
                  Total: $ {totalPrice}
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  style={{
                    textAlign: "center",
                    backgroundColor: "lightGreen",
                    width: "80%",
                    margin: "auto",
                    marginTop: "15px",
                    borderRadius: "35px",
                    color: "maroon",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Procced to checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div
            className="cart-empty"
            style={{
              width: "100%",
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="empty"
              style={{
                width: "60%",
                height: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                boxShadow: "0 0 10px 0 gray",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <h1>The cart is empty</h1>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
