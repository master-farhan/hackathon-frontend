import React from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Button from "./Button";

const Hero = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-tl", { type: "chars" });

    const tl = gsap.timeline({
      delay: .5,
    });

    tl.from(".text-content", {
      opacity: 0,
      duration: 0.3,
      y: 20,
      ease: "power1.inOut",
    })
      .to(
        ".polygon",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(".hero-img", {
        opacity: 0,
        duration: 0.3,
        y: 20,
        ease: "power1.inOut",
      })
      .from(
        titleSplit.chars,
        {
          yPercent: 100,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=.5"
      );

    // tl2
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: 1,
        // markers: true,
      },
    });

    heroTl.to(".hero-container", {
      rotate: -7,
      scale: 0.9,
      yPercent: 20,
    });
  });

  return (
    <section className="h-screen overflow-hidden">
      <div className="hero-container relative h-screen w-full bg-milk overflow-hidden flex items-center justify-center text-dark-brown text-center">
        <div className="text-content w-[95vw] flex flex-col items-center justify-center z-1">
          <h1 className="hero-tl text-2xl lg:text-[5.5vw] overflow-hidden font-bold uppercase">
            Scoops of Happiness
          </h1>
          <div
            style={{
              clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
            }}
            className="polygon overflow-hidden -mt-1 lg:-mt-[1vw]  -rotate-3 border-5 lg:border-[.5vw] border-grow"
          >
            <h1 className="text-2xl  lg:text-[4.5vw] bg-primary text-grow px-[1vw] uppercase">
              One Bite at a Time
            </h1>
          </div>
          <p className="font-paragraph py-[2vw] text-lg lg:text-[1.3vw] lg:max-w-[50vw] ">
            No rules, just scoops! Dive into bold flavors, quirky combos, and
            creamy indulgence that turns every mood into a moment worth
            celebrating.
          </p>
          <Button text="Explore Flavours" icon="🔍" link="/flavors" />
        </div>
        <img
          className="hero-img absolute top-[90vh] lg:top-[25vh] w-[70vw] lg:w-[70vw]"
          src="/images/hero-img.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
