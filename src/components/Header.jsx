import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full absolute flex flex-col md:flex-row justify-between px-5 md:px-20 py-5 md:py-10 bg-gradient-to-b from-black text-white z-50">
      <div className="text-xl text-center md:text-left mb-3 md:mb-0">
        <h1>VISITING MY FRIEND TRAVELS</h1>
      </div>
      <div className="text-center md:text-left">
        <nav>
          <Link
            className="block md:inline-block mx-2 md:mx-4 my-2 md:my-0"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block md:inline-block mx-2 md:mx-4 my-2 md:my-0"
            to="/about"
          >
            About
          </Link>
          <Link
            className="block md:inline-block mx-2 md:mx-4 my-2 md:my-0"
            to="/destination"
          >
            Destination
          </Link>
          <Link
            className="block md:inline-block mx-2 md:mx-4 my-2 md:my-0"
            to="/gallery"
          >
            Our Gallery
          </Link>
          <Link
            className="block md:inline-block mx-2 md:mx-4 my-2 md:my-0"
            to="/contact"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
