import React, { useRef } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Testimonial = () => {
  const vdRef = useRef([]);

  useGSAP(() => {
    gsap.set(".testimonial-section", {
      marginTop: "-110vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top bottom",
        end: "200% top",
        scrub: 1,
      },
    });
    tl.to(".first-title-tes", {
      xPercent: 55,
    })
      .to(
        ".sec-title-tes",
        {
          xPercent: 15,
        },
        "<"
      )
      .to(
        ".third-title-tes",
        {
          xPercent: -40,
        },
        "<"
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "5% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    video.play();
  };

  const handlePause = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };

  return (
    <section className="testimonial-section rounded-3xl bg-milk relative w-full h-[120vh] text-dark-brown">
      <div className="absolute size-full h-full w-full flex flex-col items-center pt-[25vw] lg:pt-[3vw]">
        <h1 className="text-black first-title-tes uppercase text-[15vw] leading-[105%] tracking-[.4vw] font-bold">
          What's
        </h1>
        <h1 className="text-light-brown sec-title-tes uppercase text-[15vw] leading-[105%] tracking-[.4vw] font-bold">
          Everyone
        </h1>
        <h1 className="text-black third-title-tes uppercase text-[15vw] leading-[105%] tracking-[.4vw] font-bold">
          Talking
        </h1>
      </div>

      <div className="pin-box flex items-center justify-center w-full ps-54 lg:ps-[5vw] absolute lg:bottom-[13vw] bottom-[50vh]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card md:w-[20vw] w-60 flex-none md:rounded-[2vw] rounded-3xl -ms-44 md:-ms-[5vw] overflow-hidden lg:relative absolute border-[.5vw] border-milk ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
