import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
// import Cart from "./page/Cart";
import NotFound from "./page/NotFound";
import Navbar from "./components/Navbar";
import Account from "./page/Account";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AllFlavors from "./page/AllFlavors";
import FlavorsDetails from "./page/FlavorsDetails";
import Order from "./page/Order";
import CreateIceCream from "./components/CreateIceCream";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     smooth: 1,
  //     effects: true,
  //   });
  // });

  return (
    <main className="text-grow min-h-screen font-ubuntu">
      <BrowserRouter>
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/flavors" element={<AllFlavors />} />
              <Route path="/flavors/:id" element={<FlavorsDetails />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/cart" element={<Cart />} /> */}
              <Route path="/account" element={<Account />} />
              <Route path="/order" element={<Order />} />
              <Route path="/create-icecreame" element={<CreateIceCream />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
