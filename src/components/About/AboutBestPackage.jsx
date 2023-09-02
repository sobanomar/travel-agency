import React from "react";
import bestPackage from "../../assets/best-package.jpg";
import mapLeft from "../../assets/best-package-left.png";
import mapRight from "../../assets/best-package-right.png";

const AboutBestPackage = () => {
  return (
    <div className="my-20 relative ">
      <div>
        <img className="absolute w-[30rem] top-[5.1rem]" src={mapLeft} alt="" />
        <img
          className="absolute left-[65rem] w-[30rem]"
          src={mapRight}
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <div className="absolute text-white flex flex-col items-center top-16">
          <h1 className="text-7xl my-8">Best Holiday package For You</h1>
          <p className="w-[37rem] m-2 text-xl font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            praesentium, veniam soluta eligendi atque sit laudantium ipsam?
            Porro, nihil perferendis?
          </p>
          <button className="text-white bg-purple-600 py-2 px-10 mt-10 rounded-full w-44">
            Get Now
          </button>
        </div>
      </div>

      <div className="z-1">
        <img
          src={bestPackage}
          className="h-[30rem] w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default AboutBestPackage;
