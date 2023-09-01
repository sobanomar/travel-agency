import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full absolute flex justify-between px-20 py-10 bg-gradient-to-b from-black  text-white z-50">
        <div className="">Travel Site</div>
        <div>
          <Link className="mx-4" to="/">
            Home
          </Link>
          <Link className="mx-4" to="/about">
            About
          </Link>
          <Link className="mx-4" to="/about">
            Destination
          </Link>
          <Link className="mx-4" to="/about">
            Page
          </Link>
          <Link className="mx-4" to="/about">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
