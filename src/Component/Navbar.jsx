import React, { useState } from "react";
import { Menu, XCircle } from "lucide-react";
import { motion } from "framer-motion"; // eslint-disable-line
import { Link } from "react-router-dom";
import assets from "../assets/assets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed top-6 z-[100] bg-white shadow-lg rounded-xl max-w-7xl mx-auto left-0 right-0 px-6 md:px-6 
                 md:mx-auto md:left-0 md:right-0
                 max-md:max-w-sm max-md:mx-0 max-md:left-4 max-md:right-auto"
    >
      <div className="flex items-center justify-between py-4 md:py-5 max-md:py-2">
        {/* === Logo === */}
        <Link to="/" className="flex items-center ml-1 h-12 group md:h-12 max-md:h-9">
          <img
            src={assets.newlogonobg}
            alt="Logo"
            className="h-20 w-auto transform transition-transform duration-500 ease-in-out group-hover:scale-110 md:h-22 max-md:h-12"
          />
        </Link>

        {/* === Desktop Navigation === */}
        <div className="hidden md:flex items-center space-x-8 mr-6">
          {["Home", "About Us", "Features"].map((item, index) => (
            <Link
              key={index}
              to={`/#${item.toLowerCase().replace(/\s/g, "")}`}
              className="relative text-lg text-[#1E4A44] hover:text-[#0780f7] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#0780f7] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}

          {/* Contact Us Link */}
          <Link
            to="/contact-us"
            className="relative text-lg text-[#1E4A44] hover:text-[#0780f7] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#0780f7] after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact Us
          </Link>

          {/* Register Button */}
          <Link
            to="/#register"
            className="group relative overflow-hidden bg-[#F8F1E9] text-[#1E4A44] px-5 py-2 rounded-xl font-semibold"
          >
            <span className="absolute bottom-0 left-0 w-full h-full bg-[#0780f7] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Register
            </span>
          </Link>
        </div>

        {/* === Mobile Menu Toggle === */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#1E4A44] focus:outline-none p-2 bg-gray-100 rounded-full relative z-[60] max-md:p-1.5 max-md:ml-2"
        >
          {isOpen ? <XCircle size={24} color="#1E4A44" className="md:hidden" /> : <Menu size={24} color="#1E4A44" className="md:hidden" />}
        </button>
      </div>

      {/* === Mobile Drawer === */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-48 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-1`}
      >
        <div className="flex flex-col items-start p-6 space-y-6 mt-16">
          {["Home", "About Us", "Features"].map((item, index) => (
            <Link
              key={index}
              to={`/#${item.toLowerCase().replace(/\s/g, "")}`}
              onClick={toggleMenu}
              className="text-[#1E4A44] hover:text-[#0780f7] text-lg"
            >
              {item}
            </Link>
          ))}
          <Link
            to="/contact-us"
            onClick={toggleMenu}
            className="text-[#1E4A44] hover:text-[#0780f7] text-lg"
          >
            Contact Us
          </Link>
          <Link
            to="/#register"
            onClick={toggleMenu}
            className="bg-[#0780f7] text-white px-4 py-2 rounded-md hover:bg-[#0570e0]"
          >
            Register
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
