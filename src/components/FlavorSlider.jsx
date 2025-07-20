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
      className="slider-wrapper lg:h-dvh min-h-dvh md:min-h-fit w-full mt-0 md:mt-20 lg:mt-0"
    >
      <div className="flavors h-full w-full flex md:flex-row flex-col items-center lg:gap-[15vw] md:gap-24 gap-7 flex-nowrap">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-[90vw] lg:h-[60vh] md:w-[70vw] md:h-[40vh] h-80 flex-none ${flavor.rotation}`}
          >
            {/* <img
              src={`images/${flavor.color}-bg.svg`}
              alt="flavor-bg"
              className="absolute bottom-0 md:h-full"
            /> */}

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

            <h1 className="absolute md:-bottom-[1vw] bottom-0 left-1/2 -translate-x-1/2 lg:-translate-x-7/10 text-center md:text-[3.5vw] text-3xl font-semibold uppercase tracking-tighter">
              <span className="text-dark-brow bg-milk">{flavor.name}</span>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
