import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const navLinks = [
  { link: "/", name: "Home" },
  { link: "/products", name: "Products" },
  { link: "/about", name: "About" },
  { link: "/cart", name: "Cart" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const menuRef = useRef(null);

  const openTimeline = useRef(gsap.timeline({ paused: true }));

  // Build the animation once
  React.useEffect(() => {
    openTimeline.current
      .to(line1Ref.current, {
        width: 0,
        duration: 0.2,
      })
      .to(line2Ref.current, {
        width: 0,
        duration: 0.2,
      })
      .to(line1Ref.current, {
        rotate: 45,
        width: 30,
        duration: 0.2,
      })
      .to(line2Ref.current, {
        rotate: -45,
        width: 30,
        duration: 0.2,
      })
      .to(menuRef.current, {
        top: 0,
        delay: -0.5,
        duration: 1,
      });
  }, []);

  const menuHandler = () => {
    if (!isOpen) {
      openTimeline.current.play();
    } else {
      openTimeline.current.reverse();
    }
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-screen">
      <div className="absolute top-0 left-0 p-10 lg:px-[3vw] lg:py-[2vw] w-full flex justify-between items-center gap-10 z-50 text-2xl lg:text-[2vw]">
        <div>
          <Link to="/" className="logo font-akaya">
            Sleepy Owl
          </Link>
        </div>

        <button
          onClick={menuHandler}
          className="button-menu relative flex flex-col items-center justify-center gap-2 lg:gap-[.3vw] cursor-pointer"
        >
          <div
            ref={line1Ref}
            className="menu-line1 origin-center w-10 h-0.5 lg:w-[3vw] lg:h-[.2vw] rounded-full bg-grow"
          ></div>
          <div
            ref={line2Ref}
            className="menu-line2 origin-center w-10 h-0.5 lg:w-[3vw] lg:h-[.2vw] rounded-full bg-grow"
          ></div>
        </button>
      </div>

      <div
        ref={menuRef}
        className="menuItem absolute left-0 -top-[100vh] py-20 px-10 lg:px-[3vw] w-screen h-screen bg-primary flex flex-col rounded-3xl justify-center z-49"
      >
        {navLinks.map(({ link, name }) => (
          <Link
            onClick={menuHandler}
            key={name}
            to={link}
            className="relative group text-2xl lg:text-[2vw] font-semibold hover:bg-grow hover:text-primary text-grow hover:p-5 lg:py-[1.5vw] Hover:lg:px-[3vw] rounded-2xl trans"
          >
            {name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
