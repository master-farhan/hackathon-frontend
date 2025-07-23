import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const About = () => {
  const aboutRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const blocksRef = useRef([]);
  const addToRefs = (el) =>
    el && !blocksRef.current.includes(el) && blocksRef.current.push(el);

  useEffect(() => {
    // Animate the section
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Animate heading with split words
    const headingWords = headingRef.current.textContent.split(" ");
    headingRef.current.innerHTML = headingWords
      .map(
        (word) =>
          `<span class="inline-block opacity-0 translate-y-4">${word}&nbsp;</span>`
      )
      .join("");
    gsap.to(headingRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.3,
    });

    // Animate intro paragraph
    const paraLines = paragraphRef.current.innerText.split(". ");
    paragraphRef.current.innerHTML = paraLines
      .map(
        (line) =>
          `<div class="opacity-0 translate-y-4">${line
            .trim()
            .replace(/\.$/, "")}.</div>`
      )
      .join("");
    gsap.to(paragraphRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
      delay: 0.6,
    });

    // Animate blocks
    gsap.from(blocksRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.2,
      delay: 1,
    });
  }, []);

  return (
    <section
      ref={aboutRef}
      className="min-h-screen px-5 lg:px-[4vw] pt-[13vh] pb-[10vh] lg:pt-[20vh] bg-[#FFFFFF] text-dark-brown overflow-hidden"
    >
      <img src="/images/Know-us.webp" alt="know-us" className="w-full" />
      <div className="w-full mx-auto">
        <h2
          ref={headingRef}
          className="text-4xl lg:text-[3vw] font-bold mb-6 lg:mb-[2vw] text-start md:text-start"
        >
          About <span className="">Havmor</span>
        </h2>

        <p
          ref={paragraphRef}
          className="text-lg lg:text-[1.3vw] w-full leading-relaxed mb-12 text-justify"
        >
          At Havmor, we believe in creating unforgettable moments through ice
          cream. Our journey began with a dream to bring joy and flavor to every
          corner of your day. From classic favorites to bold, new creations —
          each scoop is crafted with love, quality, and innovation.
        </p>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-[3vw] items-center">
          {" "}
          <img
            src="/images/about3.webp"
            alt=""
            className="w-full h-[50vh] object-contain"
          />
          <div className="w-full">
            <h3
              ref={addToRefs}
              className="text-2xl lg:text-[1.5vw] lg:mb-[1.4vw] font-semibold mb-4"
            >
              Havmor - Innovating Always
            </h3>
            <p
              ref={addToRefs}
              className="text-base lg:text-[1.2vw] lg:mb-[2vw] leading-relaxed mb-6"
            >
              We carry innovation in our hearts, coming up with unique flavours
              for you to experience. It’s the essence of every creation. From
              traditional recipes like Kulfis to modern favourites like Belgian
              Dark Chocolate and Hazelnut Ice Cream Cake, our portfolio boasts
              of 150+ products and speaks for our wide range. Signature tubs,
              ice candies, crunchy cones, you name it and we have it!
            </p>
            <p
              ref={addToRefs}
              className="text-base text-primary lg:text-[1.2vw] leading-relaxed"
            >
              Oh! And here’s something we are super proud of! We have 10
              consecutive wins at the Times Food Awards since 2009 in our kitty!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
