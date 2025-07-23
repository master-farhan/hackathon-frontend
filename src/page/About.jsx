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
      className="min-h-screen px-5 lg:px-[4vw] pt-[13vh] pb-[10vh] lg:pt-[20vh] bg-milk text-dark-brown overflow-hidden"
    >
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

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-[3vw] items-center">
          <div className="">
            <h3
              ref={addToRefs}
              className="text-2xl lg:text-[1.5vw] lg:mb-[1.4vw] font-semibold mb-4"
            >
              Our Mission
            </h3>
            <p
              ref={addToRefs}
              className="text-base lg:text-[1.2vw] lg:mb-[2vw] leading-relaxed mb-6"
            >
              We aim to redefine dessert culture by combining tradition with
              creativity. Havmor stands for purity, delight, and memorable
              experiences — whether it’s a summer treat or a cozy winter
              indulgence.
            </p>
            <h3
              ref={addToRefs}
              className="text-2xl lg:text-[1.5vw] lg:mb-[1.4vw] font-semibold mb-4"
            >
              Our Location
            </h3>
            <p
              ref={addToRefs}
              className="text-base lg:text-[1.2vw] leading-relaxed"
            >
              Based in the heart of flavor, our store welcomes you with a vibe
              of comfort, smiles, and of course, irresistible ice creams!
            </p>
          </div>

          <div
            ref={addToRefs}
            className="w-full h-[300px] lg:h-[25vw] rounded-xl overflow-hidden shadow-xl lg:col-span-2"
          >
            <iframe
              title="Havmor Location"
              className="w-full h-full border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.389820914389!2d77.41354877407813!3d23.259933709658343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43eec0e0bdf3%3A0x3a2b50f84f270e90!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1721667000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
