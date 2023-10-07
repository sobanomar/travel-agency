import React from "react";
import map1 from "../../assets/img/aboutus-map-1.png";
import map2 from "../../assets/img/aboutus-map-2.png";

const Hero = ({ heading, textHero, bgImg }) => {
  return (
    <div className="w-full h-[30rem] md:h-[100%] lg:h-[44.3rem] overflow-hidden  ">
      <div className="flex justify-center">
        <div className="absolute lg:w-[40%] w-[80%] flex top-32 md:mt-40 flex-col md:m-52 sm:m-32 lg:mt-32 z-10">
          <h1 className="md:text-7xl text-5xl text-center text-white">
            {heading}
          </h1>
          <p className="text-sm text-center mt-10 text-white">{textHero}</p>
        </div>
      </div>

      <div className="relative  ">
        <img
          loading="lazy"
          src={map1}
          className="absolute left-[65rem] w-1/3"
        />
        <img loading="lazy" src={map2} className="absolute w-1/3 top-72 " />
      </div>
      <img
        src={bgImg}
        className="m-0 w-full h-full object-cover brightness-50 z-0"
      />
    </div>
  );
};

export default Hero;
