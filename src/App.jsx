import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Products from "./page/Products";
import ProductDetails from "./page/ProductDetails";
import About from "./page/About";
import Cart from "./page/Cart";
import NotFound from "./page/NotFound";
import Navbar from "./components/Navbar";
import Account from "./page/Account";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main className="text-grow min-h-screen font-ubuntu">
      <BrowserRouter>
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/account" element={<Account />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
