import React from "react";
import VideoPin from "./VideoPin";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Benefit = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vd-pin-section",
        start: "-15% bottom",
        end: "top 30%",
        scrub: 1.5,
      },
    });
  });
  return (
    <section className="benefit-section min-h-dvh mt-20 overflow-hidden relative rounded-t-3xl">
      <div className="relative overlay-box">
        <VideoPin />
      </div>
    </section>
  );
};

export default Benefit;
