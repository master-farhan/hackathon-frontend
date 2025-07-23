import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const VideoPin = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vd-pin-section",
        start: "top top",
        end: "250% top",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(".video-box", {
      clipPath: "circle(100% at 50% 50%)",
      ease: "power1.inOut",
    });
  });

  return (
    <section className="relative vd-pin-section h-[110vh] overflow-hidden bg-dark-brown">
      <div className="absolute h-full text-center w flex flex-col gap-[20vw] md:flex-row justify-between p-[4vw] items-center">
        <h2 className="text-4xl w-full lg:text-[2.5vw] font-bold">Enjoy The Moment</h2>
        <p className="text-lg lg:text-[1.3vw] mt-2 lg:mt-[.5vw]">
          Discover how Havmor blends taste, joy, and creativity into every
          scoop.
        </p>
      </div>

      <div
        style={{
          clipPath: "circle(9% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <div>
          <video
            playsInline
            autoPlay
            loop
            muted
            src="\videos\pin-video.mp4"
            className="size-full absolute inset-0 object-cover"
          ></video>

          <div className="abs-center md:scale-100 scale-200">
            <img
              src="/images/circle-text.svg"
              alt="circle"
              className="spin-circle size-[15vw]"
            />

            <div className="play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[9vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full">
              <img
                src="/images/play.svg"
                alt="circle"
                className="size-[3vw] ml-[.5vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPin;
