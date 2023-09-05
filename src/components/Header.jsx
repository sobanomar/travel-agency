import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuOptions = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "About",
    },
    {
      to: "/destination",
      label: "Destination",
    },
    {
      to: "/gallery",
      label: "Gallery",
    },
    {
      to: "/contact",
      label: "Contact",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black text-white absolute w-full">
      <div className="flex justify-between items-center py-8 mx-20  md:px-0">
        <div className="text-xl">
          <h1 className="md:text-xl lg:text-3xl text-[16px]">
            VISITING MY FRIEND TRAVELS
          </h1>
        </div>
        <div className="hidden md:flex space-x-4">
          {menuOptions.map((option) => {
            <Link id={option.label} to={option.to}>
              {option.label}
            </Link>;
          })}
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/destination" className="hover:text-gray-400">
            Destination
          </Link>
          <Link to="/gallery" className="hover:text-gray-400">
            Our Gallery
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact Us
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white bg-purple-800 px-1 rounded-md"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute w-[100%] z-10">
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
              to="/destination"
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
