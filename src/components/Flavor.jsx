import React from "react";
import FlavorTitle from "./FlavorTitle";
import FlavorSlider from "./FlavorSlider";

const Flavor = () => {
  return (
    <section id="flavors" className="flavor-section min-h-screen bg-milk text-dark-brown">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 mt-10 lg:mt-[6vw]">
          <FlavorTitle />
        </div>

        <div className="h-full">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default Flavor;
