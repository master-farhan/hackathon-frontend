import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  // refs for cursor element
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    return null;
  }

  useEffect(() => {
    // get cursor element
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    // initial
    gsap.set([cursor, cursorBorder], {
      xPercent: -50,
      yPercent: -50,
    });

    // different speed
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.2,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const xToBorder = gsap.quickTo(cursorBorder, "x", {
      duration: 0.5,
      ease: "power.out",
    });

    const yToBorder = gsap.quickTo(cursorBorder, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    // Mouse move
    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);

      xToBorder(e.clientX);
      yToBorder(e.clientY);
    };

    // abb mouse move listener
    window.addEventListener("mousemove", handleMouseMove);

    // add click animation
    document.addEventListener("mousedown", () => {
      gsap.to([cursor, cursorBorder], {
        scale: 0.6,
        duration: 0.2,
      });
    });

    document.addEventListener("mouseup", () => {
      gsap.to([cursor, cursorBorder], {
        scale: 1,
        duration: 0.2,
      });
    });
  }, []);

  return (
    <>
      {/* main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 lg:h-[1.5vw] lg:w-[1.5vw] bg-primary pointer-events-none rounded-full mix-blend-multiply z-10000000 "
      ></div>

      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-10 h-10 lg:w-[3vw] lg:h-[3vw] pointer-events-none border-2 lg:border-[.2vw] rounded-full mix-blend-multiply border-primary e z-10000000 opacity-50 "
      ></div>
    </>
  );
};

export default Cursor;