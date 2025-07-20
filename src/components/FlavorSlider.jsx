import React, { useRef } from "react";
import { flavorlists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FlavorSlider = () => {
  const sliderRef = useRef();
  useGSAP(() => {
    const scrollAmountSlider =
      sliderRef.current.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: `+=${scrollAmountSlider}px`,
        scrub: 1,
        pin: true,
      },
    });

    tl.to(".flavor-section", {
      x: `-${scrollAmountSlider}px`,
      ease: "power2.inOut",
    });
  });
  return (
    <div
      ref={sliderRef}
      className="slider-wrapper lg:h-dvh min-h-dvh md:min-h-fit w-full mt-0 md:mt-40 lg:mt-0"
    >
      <div className="flavors h-full w-full flex lg:flex-row flex-col items-center lg:gap-[15vw] md:gap-24 gap-7 flex-nowrap">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-[90vw] lg:h-[60vh] md:w-[70vw] md:h-[40vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`images/${flavor.color}-bg.svg`}
              alt="flavor-bg"
              className="absolute bottom-0 md:h-full"
            />

            <img
              src={`images/${flavor.color}-drink.png`}
              alt="drink-img"
              className={`drinks absolute left-1/2 ${flavor.size}`}
            />

            <img
              src={`images/${flavor.color}-elements.webp`}
              alt="elements-img"
              className="elements absolute md:top-0 md:bottom-auto bottom-10 w-full"
            />

            <h1 className="absolute bottom-[1vw] left-[2vw] rounded-2xl text-center md:text-[2.5vw] text-3xl font-semibold uppercase tracking-tighter text-milk">
              {flavor.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
