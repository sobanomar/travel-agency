import React from "react";
import map1 from "../../assets/aboutus-map-1.png";
import map2 from "../../assets/aboutus-map-2.png";
import bg from "../../assets/bg-about.jpg";

const Hero = ({ heading, textHero }) => {
  return (
    <div className="w-full   h-[44.3rem] overflow-hidden  ">
      <div className="absolute left-[30rem] top-72 w-[36rem]  ">
        <h1 className="text-7xl text-center text-white">{heading}</h1>
        <p className="text-sm text-center mt-10 text-white">{textHero}</p>
      </div>

      <div className="relative  ">
        <img src={map1} className="absolute left-[65rem] w-1/3" />
        <img src={map2} className="absolute w-1/3 top-72" />
      </div>
      <img src={bg} className="z-0 m-0 w-full" />
    </div>
  );
};

export default Hero;
