import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { CartContextState } from "../context/Context.js";

const Header = () => {
  const { state, dispatch } = CartContextState();
  return (
    <>
      <div
        className="navBar"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div
          className="nav"
          style={{
            width: "80%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            padding: "15px 0",
          }}
        >
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <h2>Shopping Cart</h2>
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "600px",
            }}
          >
            <input
              type="text"
              placeholder="Search"
              style={{
                padding: "8px",
                width: "400px",
                borderRadius: "5px",
                fontSize: "17px",
              }}
            />
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  fontSize: "18px",
                  padding: "7px 20px",
                  backgroundColor: "gray",
                  borderRadius: "5px",
                }}
              >
                {state?.cart.length > 0
                  ? `Cart ( ${state.cart.length} )`
                  : "Cart"}
              </button>
              <ul className="dropdown-menu" style={{ width: "400px" }}>
                <li>
                  {state?.cart.map((e) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "9px",
                          padding: "0 10px",
                        }}
                      >
                        <img
                          src={e.image}
                          alt={e.name}
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "100%",
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            width: "50%",
                          }}
                        >
                          <span>{e.name}</span>
                          <span>${e.price}</span>
                        </div>
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            dispatch({ type: "REMOVE_TO_CART", payload: e })
                          }
                        >
                          Remove
                        </button>
                      </div>
                    );
                  })}
                </li>
                <div
                  style={{
                    width: "60%",
                    margin: "auto",
                    textAlign: "center",
                    marginTop: "20px",
                    marginBottom: "10px",
                  }}
                >
                  <Link to={"/cart"}>
                    <button
                      style={{
                        width: "100%",
                        padding: "8px 20px",
                        border: "none",
                        outline: "none",
                        boxShadow: "0 0 5px 0 gray",
                        borderRadius: "5px",
                        backgroundColor: "lightBlue",
                        fontSize: "20px",
                      }}
                    >
                      Go to cart
                    </button>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
