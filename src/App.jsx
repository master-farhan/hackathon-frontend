import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import NotFound from "./page/NotFound";
import Navbar from "./components/Navbar";
import Account from "./page/users/Account";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AllFlavors from "./page/AllFlavors";
import FlavorsDetails from "./page/FlavorsDetails";
import Order from "./page/Order";
import AuthPage from "./auth/AuthPage";

// Auth route wrappers
import AuthRoute from "./auth/AuthRoute";
import GuestRoute from "./auth/GuestRoute";
import Cart from "./page/Cart";
import Footer from "./components/Footer";
import Admin from "./page/admin/Admin";
import Dashboard from "./page/admin/Dashboard";
import SeeOrders from "./page/admin/SeeOrders";
import UpdateIceCream from "./page/admin/UpdateIceCream";
import DeleteIceCream from "./page/admin/DeleteIceCream";
import CreateIceCream from "./page/admin/CreateIceCream";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  return (
    <main className="text-grow min-h-screen font-ubuntu">
      <BrowserRouter>
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/flavors" element={<AllFlavors />} />
              <Route path="/flavors/:id" element={<FlavorsDetails />} />
              <Route path="/create-icecreame" element={<CreateIceCream />} />

              {/* 🔐 Protected Routes */}
              <Route
                path="/account"
                element={
                  <AuthRoute>
                    <Account />
                  </AuthRoute>
                }
              />

              <Route
                path="/admin"
                element={
                  <AuthRoute>
                    <Admin />
                  </AuthRoute>
                }
              >
                <Route index element={<Dashboard />} />
                <Route path="orders" element={<SeeOrders />} />
                <Route path="create" element={<CreateIceCream />} />
                <Route path="update" element={<UpdateIceCream />} />
                <Route path="delete" element={<DeleteIceCream />} />
              </Route>

              <Route
                path="/orders/:id"
                element={
                  <AuthRoute>
                    <Order />
                  </AuthRoute>
                }
              />
              {/* Example: Cart */}
              <Route
                path="/cart"
                element={
                  <AuthRoute>
                    <Cart />
                  </AuthRoute>
                }
              />

              {/* 🔓 Guest-only Routes */}
              <Route
                path="/auth"
                element={
                  <GuestRoute>
                    <AuthPage />
                  </GuestRoute>
                }
              />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
