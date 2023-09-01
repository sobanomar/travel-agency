import React from "react";
import homeHero from "../../assets/home-hero.jpg";
import mapHero from "../../assets/home-hero-map.png";
import getStarted from "../../assets/home-hero-get-started.png";
const Home = () => {
  return (
    <div>
      <div className="flex h-screen bg-green-400">
        <div className="w-[50%] text-white flex justify-center  ">
          <div className="flex flex-col gap-20 items-center w-[70%] z-50">
            <h1 className="text-7xl mt-44 ">
              Find Beautiful Dream Places With Tourtle
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              dolorum omnis, aliquid rerum nemo quo ad quidem, explicabo officia
              praesentium natus voluptatum non facere earum. Error et quasi
              reprehenderit repudiandae.
            </p>
          </div>
        </div>
        <img src={mapHero} className="absolute w-[40%] top-24 left-56" />
        <img
          src={getStarted}
          className="absolute w-[8%] top-[34rem] left-[44rem] z-10"
        />
        <div className="w-[50%]">
          <img
            className="rotate-3 ml-6 z-0 -mt-5 h-[110%] w-[100%] object-cover"
            src={homeHero}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
