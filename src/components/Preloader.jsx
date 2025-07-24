// import React from "react";

// const Preloader = () => {
//   return (
//     <div className="h-screen w-screen bg-milk text-dark-brown relative">
//       <div className="w-full bg-dark-brown h-2/4 absolute top-0 left-0"></div>
//       <div className="w-full bg-main-bg h-2/4 absolute bottom-0 left-0"></div>
//       <img
//         src="/images/black-drink.png"
//         alt=""
//         className="abs-center w-50"
//       />
//     </div>
//   );
// };

// export default Preloader;

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  const containerRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();
  const imgRef = useRef();
  const textRef = useRef();
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setAnimationDone(true),
    });

    // Split letters
    const letters = textRef.current.querySelectorAll(".letter");

    tl.to(topRef.current, {
      y: "-100%",
      duration: 1.2,
      ease: "power4.inOut",
    })
      .to(
        bottomRef.current,
        {
          y: "100%",
          duration: 1.2,
          ease: "power4.inOut",
        },
        "<"
      )

      // Animate "Havmor" letters
      .fromTo(
        letters,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.06,
        },
        "-=0.8"
      )

      // Animate image with mask
      .fromTo(
        imgRef.current,
        {
          height: "100vh",
          width: "100vh",
          clipPath: "circle(0% at 50% 50%)",
        },
        {
          height: "auto",
          width: "50vmin",
          clipPath: "circle(75% at 50% 50%)",
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1"
      )
      .to(
        ".preload-div",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "+=1.2"
      );
  }, []);

  // Split "Havmor" text into spans
  const splitText = "Havmor".split("").map((char, i) => (
    <span key={i} className="letter inline-block opacity-0">
      {char}
    </span>
  ));

  return (
    <div
      className="preload-div h-screen w-screen bg-milk text-dark-brown relative overflow-hidden"
      ref={containerRef}
    >
      <div
        className="w-full bg-dark-brown h-2/4 absolute top-0 left-0"
        ref={topRef}
      ></div>
      <div
        className="w-full bg-main-bg h-2/4 absolute bottom-0 left-0"
        ref={bottomRef}
      ></div>

      <h1
        ref={textRef}
        className="absolute top-[30%] left-1/2 transform -translate-x-1/2 text-[10vw] font-bold tracking-widest z-40"
      >
        {splitText}
      </h1>

      <img
        ref={imgRef}
        src="/images/black-drink.png"
        alt=""
        className={`absolute top-1/2 left-1/2 z-50 transition-all duration-1000 ease-in-out ${
          animationDone ? "w-30 md:w-40 lg:w-[15vw]" : ""
        }`}
        style={{
          transform: "translate(-50%, -50%)",
          clipPath: "circle(0% at 50% 50%)",
        }}
      />
    </div>
  );
};

export default Preloader;
