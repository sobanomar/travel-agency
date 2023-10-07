import React from "react";

import homeHero from "../../assets/img/home-hero.webp";
import mapHero from "../../assets/img/home-hero-map.png";
import getStartedSvg from "../../assets/img/home-get-started.svg";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div>
      <div className="flex h-screen bg-purple-500 pl-5 sm:p-0">
        <div className="w-[60%] sm:w-[50%] text-white flex justify-center">
          <div className="flex flex-col mt-16 gap-5 mx-1 sm:gap-20 justify-center sm:w-[80%] z-10">
            <h1 className="text-lg sm:text-3xl lg:text-5xl ">
              Find Beautiful Dream Places With Visiting My Friend Travels
            </h1>
            <p className="text-xs sm:text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              dolorum omnis, aliquid rerum nemo quo ad quidem, explicabo officia
              praesentium natus voluptatum non facere earum. Error et quasi
              reprehenderit repudiandae.
            </p>
          </div>
        </div>
        <img
          src={mapHero}
          className="absolute w-[80%] sm:w-[40%] top-[20%] sm:top-[5%] left-[5%] sm:left-[25%] "
        />
        <Link to="/destinations">
          <img
            src={getStartedSvg}
            className="absolute w-[9%] top-[75%] left-[47.5%] z-10 hidden sm:block hover:scale-90 transform transition-transform duration-300"
          />
        </Link>
        <div className="w-[40%] sm:w-[50%] h-[90%] md:h-[120%] overflow-x-hidden flex items-center justify-end sm:justify-center">
          <img
            className="z-0 mt-32 rounded-r-none rounded-l-xl sm:rounded-xl sm:rotate-3 md:ml-12 md:-mt-16 sm:w-[80%] h-[70%] md:h-[95%] md:w-[100%] object-cover"
            src={homeHero}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
