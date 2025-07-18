import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Products from "./page/Products";
import ProductDetails from "./page/ProductDetails";
import About from "./page/About";
import Cart from "./page/Cart";
import NotFound from "./page/NotFound";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-back text-grow min-h-screen font-ubuntu">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
