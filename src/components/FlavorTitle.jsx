import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplitF = SplitText.create(".first-split-favorite h1", {
      type: "chars",
    });
    const secondTextSplitF = SplitText.create(".second-text-Fa h1", {
      type: "chars",
    });

    gsap.from(firstTextSplitF.chars, {
      yPercent: 100,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 40%",
        end: "top 10%",
        scrub: 2,
      },
    });

    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.out",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 20%",
        end: "top top",
        scrub: 1,
      },
    });

    gsap.from(secondTextSplitF.chars, {
      yPercent: 100,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 20%",
        end: "top top",
        scrub: 2,
      },
    });
  });

  return (
    <div className="general-title col-center lg:text-[5vw] md:text-8xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw] h-full lg:gap-[.5vw]  gap-10 lg:pt-[6vw]">
      <div className="first-split-favorite">
        <h1 className="text-center text-dark-brown overflow-y-hidden">
          WE HAVE 6
        </h1>
      </div>

      <div
        style={{
          clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
        }}
        className="flavor-text-scroll rotate-[-4deg] lg:translate-y-[-.5vw] -translate-y-5 border-[.5vw] border-milk absolute z-10"
      >
        <div className="bg-primary py-2 lg:py-0 lg:px-[1.5vw] px-3 text-center">
          <h2 className="text-milk lg:leading-none">freaking</h2>
        </div>
      </div>

      <div className="lg:py-0 pt-5 second-text-Fa  leading-[12vw]">
        <h1 className="text-center overflow-y-hidden">DELICIOUS FLAVORS</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
