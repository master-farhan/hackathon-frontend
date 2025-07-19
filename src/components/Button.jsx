import React from "react";
import { Link } from "react-router-dom";

const HeroButton = ({
  text = "Order Now",
  icon = "🍦",
  link = "/",
  isExternal = false,
}) => {
  const baseClass =
    "pt-4 pb-3 px-10 lg:pt-[1vw] lg:pb-[.8vw] lg:text-[1vw] lg:px-[2vw] rounded-full bg-primary text-grow uppercase inline-block text-white hover:scale-105 transition-transform duration-300";

  return isExternal ? (
    <a href={link} className={baseClass} rel="noopener noreferrer">
      {icon} {text}
    </a>
  ) : (
    <Link to={link} className={baseClass}>
      {icon} {text}
    </Link>
  );
};

export default HeroButton;
