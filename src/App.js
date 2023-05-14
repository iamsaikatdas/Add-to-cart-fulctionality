import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout.js";
import Home from "./components/Home.js";
import Cart from "./components/Cart.js";

function App() {
  return (
    <div className="App">
      <h1>This is context with useReducer tutorial</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
