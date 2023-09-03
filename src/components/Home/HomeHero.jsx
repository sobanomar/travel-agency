import React from "react";

import homeHero from "../../assets/home-hero.jpg";
import mapHero from "../../assets/home-hero-map.png";
import getStarted from "../../assets/home-hero-get-started.png";

const HomeHero = () => {
  return (
    <div>
      <div className="flex h-screen bg-purple-500">
        <div className="w-[50%] text-white flex justify-center  ">
          <div className="flex flex-col gap-20 items-center w-[70%] z-50">
            <h1 className="text-7xl mt-44 ">
              Find Beautiful Dream Places With Visiting My Friend Travels
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              dolorum omnis, aliquid rerum nemo quo ad quidem, explicabo officia
              praesentium natus voluptatum non facere earum. Error et quasi
              reprehenderit repudiandae.
            </p>
          </div>
        </div>
        <img src={mapHero} className="absolute w-[40%] top-24 left-56 " />
        <img
          src={getStarted}
          className="absolute w-[8%] top-[34rem] left-[44.5rem] z-10"
        />
        <div className="w-[50%]">
          <img
            className="rotate-3 ml-8 z-0 -mt-5 h-[115%] w-[100%] object-cover rounded-xl img-glow"
            src={homeHero}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
