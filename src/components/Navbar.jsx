import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.isAdmin;

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed z-100 w-full top-0 left-0 md:pl-10 pl-5 lg:pl-[4vw] flex justify-between items-center pointer-events-none">
      {/* nav  */}

      <nav
        className={`absolute left-0 h-screen w-full bg-milk z-50 flex flex-col gap-[2vh] md:px-10 px-5 lg:px-[4vw] pt-[20vh] transition-all duration-700 ${
          isOpen ? "top-0" : "-top-[100vh]"
        }`}
      >
        {navLinks.map(({ link, name }) => (
          <NavLink
            onClick={menuHandler}
            key={name}
            to={link}
            className={({ isActive }) =>
              `py-5 lg:py-[4vh] w-full rounded group transition-all duration-200 text-2xl lg:text-[1.5vw] pointer-events-auto ${
                isActive
                  ? "bg-primary text-milk pl-[5vh]"
                  : "hover:pl-[5vh] text-primary bg-milk hover:bg-primary/20"
              }`
            }
          >
            <span>{name}</span>
          </NavLink>
        ))}

        {/* ✅ Conditionally render Admin or Account */}
        {user ? (
          <NavLink
            onClick={menuHandler}
            to={isAdmin ? "/admin" : "/account"}
            className={({ isActive }) =>
              `py-5 lg:py-[4vh] w-full rounded group transition-all duration-200 text-2xl lg:text-[1.5vw] pointer-events-auto ${
                isActive
                  ? "bg-primary text-milk pl-[5vh]"
                  : "hover:pl-[5vh] text-primary bg-milk hover:bg-primary/20"
              }`
            }
          >
            <span>{isAdmin ? "Admin Panel" : "My Account"}</span>
          </NavLink>
        ) : (
          <NavLink
            onClick={menuHandler}
            to={"/auth"}
            className={({ isActive }) =>
              `py-5 lg:py-[4vh] w-full rounded group transition-all duration-200 text-2xl lg:text-[1.5vw] pointer-events-auto ${
                isActive
                  ? "bg-primary text-milk pl-[5vh]"
                  : "hover:pl-[5vh] text-primary bg-milk hover:bg-primary/20"
              }`
            }
          >
            <span>Login</span>
          </NavLink>
        )}
      </nav>

      {/* menu */}
      <button
        onClick={menuHandler}
        className={`flex flex-col pointer-events-auto ${
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
      <Link
        to="/"
        className="logo z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          className="md:w-40 w-30 lg:w-[15vw] pointer-events-auto"
          src="/images/havmor.png"
          alt="nav-logo"
        />
      </Link>
    </header>
  );
};

export default Navbar;
