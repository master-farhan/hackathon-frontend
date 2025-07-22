import React from "react";
import Hero from "../components/Hero";
import Message from "../components/Message";
import Flavor from "../components/Flavor";
import Benefit from "../components/Benefit";
import Testimonial from "../components/Testimonial";
const Home = () => {
  return (
    <>
      <Hero />
      <Message />
      <Flavor />
      <div className="bg-dark-brown absolute z-10 w-full">
        <img
          src="/images/footer-dip.png"
          className="w-full object-cover"
          alt=""
        />
      </div>

      <div className="">
        <Benefit />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
