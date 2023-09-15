import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-gradient-to-b from-black text-white fixed w-full z-50">
      <div className="flex justify-between md:mx-8 lg:mx-20 py-8 mx-5  md:px-0">
        <div className="text-xl">
          <h1 className="font-semibold md:text-xl lg:text-3xl text-[16px] header-name-text">
            <div className="rainbow-text">
              {/* <span class="violet">V</span>
              <span class="indigo">I</span>
              <span class="blue">S</span>
              <span class="green">I</span>
              <span class="yellow">T</span>
              <span class="orange">I</span>
              <span class="red">N</span>
              <span>G</span>
              <span class="violet">M</span>
              <span class="indigo">Y</span>
              <span class="blue"> </span>
              <span class="green">F</span>
              <span class="yellow">R</span>
              <span class="orange">I</span>
              <span class="red">E</span>
              <span class="violet">N</span>
              <span class="indigo">D</span>
              <span class="blue"> </span>
              <span class="green">T</span>
              <span class="yellow">R</span>
              <span class="orange">A</span>
              <span class="red">V</span>
              <span class="violet">E</span>
              <span class="indigo">L</span>
              <span class="blue">S</span> */}
              VISITING MY FRIEND TRAVELS
            </div>
          </h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-purple-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-purple-400">
            About
          </Link>
          <Link to="/destinations" className="hover:text-purple-400">
            Destinations
          </Link>
          <Link to="/gallery" className="hover:text-purple-400">
            Our Gallery
          </Link>
          <Link to="/contact" className="hover:text-purple-400">
            Contact Us
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white bg-purple-800 pt-1.5 p-2 rounded-md"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute w-[100%] z-50">
          <div className="bg-purple-900 text-white py-4 px-6 space-y-2">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block hover:text-gray-400"
            >
              About
            </Link>
            <Link
              to="/destinations"
              onClick={toggleMenu}
              className="block hover:text-gray-400"
            >
              Destination
            </Link>
            <Link
              to="/gallery"
              onClick={toggleMenu}
              className="block hover:text-gray-400"
            >
              Our Gallery
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block hover:text-gray-400"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
