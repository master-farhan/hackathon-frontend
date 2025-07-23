import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white px-5 pb-5 md:px-[4vw] md:pb-[2vw]">
      <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-[3vw]:">
        {/* Logo and Socials */}
        <div className="flex flex-col gap-4 md:gap-[1vw]">
          <Link to="/" className="logo">
            <img
              className="md:w-40 w-30 lg:w-[15vw] pointer-events-auto"
              src="/images/havmor.png"
              alt="nav-logo"
            />
          </Link>
          <h3 className="text-lg mb-[1vh] lg:text-[1.5vw] uppercase">
            Lotte India Corporation Limited
          </h3>
          <p className="text-sm lg:text-[1vw] lg:w-[30vw]">
            2nd Floor, Commerce House – 4, B/S Shell Petrol Pump, 100 Ft. Road,
            Prahlad nagar Anandnagar road, Ahmedabad-380015, Corporate office :
            079 4020 9000
          </p>
          <div className="flex gap-5 lg:gap-[2vw] lg:mb-[1.4vw] mt-2 lg:mt-[.5vw]">
            <a
              href="https://www.facebook.com/HavmorIcecreams"
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
              href="https://x.com/HavmorIceCreams"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-lg lg:text-[1.4vw] hover:text-red-400" />
            </a>
            <a
              href="https://www.youtube.com/user/HAVMORICECREAM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-lg lg:text-[1.4vw] hover:text-red-400" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="md:flex-center pt-[2vw]">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 md:gap-[2vw] lg:gap-[3vw] lg:text-[1vw] text-xs">
            <div>
              <h4 className="font-semibold mb-3 lg:text-[1.3vw] whitespace-nowrap md:mb-[1.5vw]">
                KNOW US BETTER
              </h4>
              <ul className="space-y-2 lg:space-y-[.8vw]">
                <li>
                  <a href="/about" className="hover:underline">
                    About Havmor
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:underline">
                    Career
                  </a>
                </li>
                <li>
                  <a href="/media" className="hover:underline">
                    Annual Return
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    News Updates
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Awards
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 lg:text-[1.3vw] whitespace-nowrap md:mb-[1.5vw]">
                SURPRISE ME
              </h4>
              <ul className="space-y-2 lg:space-y-[.8vw]">
                <li>
                  <a href="/products" className="hover:underline">
                    Party Time
                  </a>
                </li>
                <li>
                  <a href="/novelties" className="hover:underline">
                    Contests
                  </a>
                </li>
                <li>
                  <a href="/scooping" className="hover:underline">
                    Meet Our Showrunners
                  </a>
                </li>
                <li>
                  <a href="/scooping" className="hover:underline">
                    We're Close By
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 lg:text-[1.3vw] whitespace-nowrap md:mb-[1.5vw] uppercase">
                Privacy Policy
              </h4>
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
                    ITGrievance@havmor.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 lg:text-[1.3vw] whitespace-nowrap md:mb-[1.5vw]">
                CHOOSE YOUR PALETTE
              </h4>
              <ul className="space-y-2 lg:space-y-[.8vw]">
                <li>
                  <a href="/privacy-policy" className="hover:underline">
                    Chocolate
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Dry Fruits
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Indian Traditional
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Fruits
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    International
                  </a>
                </li>
              </ul>
            </div>{" "}
            <div>
              <h4 className="font-semibold mb-3 lg:text-[1.3vw] whitespace-nowrap md:mb-[1.5vw]">
                Customer Care
              </h4>
              <ul className="space-y-2 lg:space-y-[.8vw]">
                <li>
                  <a href="/privacy-policy" className="hover:underline">
                    022 6987 1275
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    havmor@havmor.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-milk pt-5 mt-5 md:pt-[2vw] md:mt-5 text-sm lg:text-[1vw] text-milk/80 text-center">
        &copy; {new Date().getFullYear()} Havmor Ice Cream Ltd. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
