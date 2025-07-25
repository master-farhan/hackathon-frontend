import React from "react";
import FlavorTitle from "./FlavorTitle";
import FlavorSlider from "./FlavorSlider";

const Flavor = () => {
  return (
    <section className="ralative pb-20 md:pb-0 flavor-section min-h-screen bg-milk text-dark-brown">
      <div className="h-full lg:pl-[4vw] flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57vw] flex-none h-80 lg:h-full">
          <FlavorTitle />
        </div>

        <div className="h-full bg-milk">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default Flavor;
