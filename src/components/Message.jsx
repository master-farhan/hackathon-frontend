import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const Message = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", { type: "words" });
    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paraMsgSplit = SplitText.create(".message-para", {
      type: "words, lines",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "top 30%",
        scrub: 1,
      },
    });

    gsap.to(secondMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        end: "top 30%",
        scrub: true,
      },
    });

    const revelMsg = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".polygon-message",
        start: "top center",
        end: "top 0%",
        scrub: true,
      },
    });

    revelMsg
      .to(".polygon-message", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .from(
        paraMsgSplit.words,
        {
          opacity: 0,
          yPercent: 100,
          duration: 1,
          stagger: 0.02,
          ease: "power2.inOut",
        },
        "+=1"
      );
  });

  return (
    <section className="message-content rounded-3xl bg-dark-brown bg-[url()] text-milk lg:py-0 py-30 lg:h-screen col-center relative z-20 w-full">
      <div className="container mx-auto col-center">
        <div className="w-full h-full">
          <div className="msg-wrapper text-3xl lg:text-[5vw] font-bold leading-[9vw] tracking-[-.10vw] flex flex-col justify-center items-center md:gap-24 gap-14 text-center lg:gap-[4vw] w-full">
            <h1 className="first-message whitespace-nowrap leading-none text-mid-brown/50">
              Scoop the Joy, <br /> Taste the Fun
            </h1>

            <div
              style={{
                clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
              }}
              className="polygon-message overflow-hidden -my-20 lg:-my-[7vw] -rotate-7"
            >
              <img
                src="/images/message-img.png"
                alt=""
                className="w-40 lg:w-[12vw]"
              />
            </div>

            <h1 className="second-message  md:whitespace-nowrap  leading-none text-mid-brown/50">
              Cookie Crunch Meets <br /> Creamy Delight
            </h1>
          </div>
        </div>

        <div className="message-para flex-center text-center lg:text-[1.2vw] mt-10 md:mt-20 lg:mt-[5vw] lg:max-w-[30vw] w-[95vw] overflow-hidden">
          <p className="whitespace-nowrap">
            Rev up your revel spirit and feed the adventure <br /> of life with
            SPYLT, where you're one chug away <br /> from epic nostalgla and
            fearless fun.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Message;
