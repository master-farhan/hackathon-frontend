import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.isAdmin;

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  // Scroll smoothly to top on navigation
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    menuHandler(); // close menu on nav click
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
            onClick={handleNavClick}
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

        {user && !user?.isAdmin ? (
          <NavLink
            onClick={handleNavClick}
            to={isAdmin ? "/cart" : "/cart"}
            className={({ isActive }) =>
              `py-5 lg:py-[4vh] w-full rounded group transition-all duration-200 text-2xl lg:text-[1.5vw] pointer-events-auto ${
                isActive
                  ? "bg-primary text-milk pl-[5vh]"
                  : "hover:pl-[5vh] text-primary bg-milk hover:bg-primary/20"
              }`
            }
          >
            Cart
          </NavLink>
        ) : (
          ""
        )}

        {user ? (
          <NavLink
            onClick={handleNavClick}
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
            onClick={handleNavClick}
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
        aria-label="Toggle menu"
      >
        <div
          className={`menu-line1 h-1 w-12 lg:h-[.3vw] lg:w-[4vw] rounded-full bg-primary transition-all duration-300`}
        ></div>
        <div
          className={`menu-line2 h-1 w-12 lg:h-[.3vw] lg:w-[4vw] rounded-full bg-primary transition-all duration-300`}
        ></div>
      </button>

      {/* logo */}
      <Link
        to="/"
        className="logo z-100 pointer-events-auto"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          setIsOpen(false);
        }}
      >
        <img
          className="md:w-40  z-100 w-30 lg:w-[15vw]"
          src="/images/havmor.png"
          alt="nav-logo"
        />
      </Link>
    </header>
  );
};

export default Navbar;
