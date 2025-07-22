import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white px-5 pb-5 md:px-[4vw] md:pb-[2vw]">
      <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-[3vw]:">
        {/* Logo and Socials */}
        <div className="flex flex-col gap-4 md:gap-[1vw]">
          <Link to="/" className="logo">
            <img
              className="md:w-40 w-30 lg:w-[15vw] pointer-events-auto"
              src="/images/havmor.png"
              alt="nav-logo"
            />
          </Link>
          <p className="text-sm lg:text-[1vw] max-w-[30vw]">
            Making ice creams since 1944. A blend of joy, flavor, and quality.
          </p>
          <div className="flex gap-4 lg:gap-[1.5vw] lg:mb-[1.4vw] mt-2 lg:mt-[.5vw]">
            <a
              href="https://www.facebook.com/Havmor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-lg lg:text-[1.4vw] hover:text-red-400" />
            </a>
            <a
              href="https://www.instagram.com/havmoricecreams/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-lg lg:text-[1.4vw] hover:text-red-400" />
            </a>
            <a
              href="https://twitter.com/Havmor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-lg lg:text-[1.4vw] hover:text-red-400" />
            </a>
            <a
              href="https://www.youtube.com/user/HavmorIceCreams"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-lg lg:text-[1.4vw] hover:text-red-400" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="md:flex-center pt-[2vw]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[3vw] lg:text-[1vw] text-xs">
            <div>
              <h4 className="font-semibold mb-3 md:mb-[1vw]">About</h4>
              <ul className="space-y-2 lg:space-y-[.8vw]">
                <li>
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/media" className="hover:underline">
                    Media
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-[1vw]">Products</h4>
              <ul className="space-y-2 lg:space-y-[.8vw]">
                <li>
                  <a href="/products" className="hover:underline">
                    Ice Creams
                  </a>
                </li>
                <li>
                  <a href="/novelties" className="hover:underline">
                    Novelties
                  </a>
                </li>
                <li>
                  <a href="/scooping" className="hover:underline">
                    Scooping
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-[1vw]">Legal</h4>
              <ul className="space-y-2 lg:space-y-[.8vw]">
                <li>
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="/sitemap" className="hover:underline">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-milk md:pt-[2vw] md:mt-5 text-sm lg:text-[1vw] text-milk/80 text-center">
        &copy; {new Date().getFullYear()} Havmor Ice Cream Ltd. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
