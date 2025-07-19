import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full top-0 left-0 z-49 md:pl-10 pl-5 lg:pl-[4vw] flex justify-between items-center">
      {/* nav  */}
      <nav
        className={`absolute left-0 h-screen w-full bg-milk rounded-b-3xl z-49 flex flex-col md:px-10 px-5 lg:px-[4vw] pt-[20vh] transition-all duration-400 ${
          isOpen ? "top-0" : "-top-[100vh]"
        }`}
      >
        {navLinks.map(({ link, name }) => (
          <Link
            onClick={menuHandler}
            key={name}
            to={link}
            className="text-primary py-7 lg:py-[5vh]  w-full hover:bg-primary hover:text-milk rounded-3xl group transition-all duration-100 text-2xl lg:text-[1.5vw]"
          >
            <span className="group-hover:pl-[5vh]"> {name} </span>
          </Link>
        ))}
      </nav>

      {/* menu */}
      <button
        onClick={menuHandler}
        className={`flex flex-col ${
          isOpen ? "gap-4 lg:gap-[1vw]" : "gap-2 lg:gap-[.5vw]"
        } cursor-pointer z-50 transition-all duration-300`}
      >
        <div
          className={`menu-line1 h-1 w-12 lg:h-[.3vw] lg:w-[4vw]  rounded-full ${
            isOpen ? "bg-primary" : "bg-primary"
          } transition-all duration-300`}
        ></div>
        <div
          className={`menu-line2 h-1 w-12 lg:h-[.3vw] lg:w-[4vw]  rounded-full ${
            isOpen ? "bg-primary" : "bg-primary"
          } transition-all duration-300`}
        ></div>
      </button>

      {/* logo */}
      <Link to="/" className="logo z-50">
        <img
          className="md:w-40 w-30 lg:w-[15vw]"
          src="/images/havmor.png"
          alt="nav-logo"
        />
      </Link>
    </header>
  );
};

export default Navbar;
