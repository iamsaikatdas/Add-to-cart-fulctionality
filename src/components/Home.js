import React from "react";
import Layout from "./Layout.js";
import { CartContextState } from "../context/Context.js";
import SingleProduct from "./SingleProduct.js";
import Filters from "./Filters.js";

const Home = () => {
  const { state } = CartContextState();
  console.log(state);

  return (
    <Layout>
      <div
        className="home"
        style={{
          display: "flex",
          margin: "15px 0",
        }}
      >
        <div>
          <Filters />
        </div>
        <div
          className="producContain"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
            rowGap: "35px",
            margin: "15px 0",
            columnGap: "10px",
          }}
        >
          {state?.products?.map((e) => {
            return <SingleProduct prod={e} key={e.id} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
