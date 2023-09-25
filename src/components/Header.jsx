import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menu = [
  {
    label: "Home",
    link: "/",
    id: 1,
  },
  {
    label: "About Us",
    link: "/about",
    id: 2,
  },
  {
    label: "Destinations",
    link: "/destinations",
    id: 3,
  },
  {
    label: "Our Gallery",
    link: "/gallery",
    id: 4,
  },
  {
    label: "Contact Us",
    link: "/contact",
    id: 5,
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const parts = location.pathname.split("/");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-gradient-to-b from-black text-white fixed w-full z-50">
      <div className="flex justify-between md:mx-8 lg:mx-20 py-8 mx-5  md:px-0">
        <div className="text-xl">
          <h1 className="font-semibold md:text-xl lg:text-3xl text-[16px] header-name-text">
            <Link to="/" className="rainbow-text">
              VISITING MY FRIEND TRAVELS
            </Link>
          </h1>
        </div>
        <div className="hidden md:flex space-x-2 lg:space-x-4">
          {menu.map((menuItem) => (
            <Link
              key={menuItem.id}
              to={menuItem.link}
              className={
                menuItem.link === "/" + parts[1]
                  ? "text-purple-500 transition duration-300]"
                  : "hover:text-purple-500 transition duration-300 hover:scale-[1.1]"
              }
            >
              {menuItem.label}
            </Link>
          ))}
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
        <div className="md:hidden top-20 absolute w-[100%] z-50">
          <div className="bg-purple-900 bg-opacity-95 mx-2 rounded-2xl text-white py-4 px-6 space-y-2">
            {menu.map((menuItem) => (
              <Link
                key={menuItem.id}
                to={menuItem.link}
                onClick={toggleMenu}
                className={
                  menuItem.link === "/" + parts[1]
                    ? "text-purple-500 transition duration-300] block"
                    : "hover:text-purple-500 transition duration-300 hover:scale-[1.1] block"
                }
              >
                {menuItem.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
