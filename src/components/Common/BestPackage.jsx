import React from "react";
import bestPackage from "../../assets/img/best-package.jpg";
import mapLeft from "../../assets/img/best-package-left.png";
import mapRight from "../../assets/img/best-package-right.png";
import { Link } from "react-router-dom";

const BestPackage = () => {
  return (
    <div className="my-5 sm:my-10 md:my-28 relative overflow-hidden">
      <div className="absolute h-full">
        <img
          src={bestPackage}
          className="object-cover h-full w-[100rem] brightness-50 z-0 "
        />
      </div>
      <div className="flex justify-center my-20 md:my-28">
        <div className="z-10 text-white flex flex-col text-center items-center sm:w-[70%]">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl ">
            Best Holiday package For You
          </h1>
          <p className="m-2 text-center sm:text-lg md:text-xl font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            praesentium, veniam soluta eligendi atque sit laudantium ipsam?
            Porro, nihil perferendis?
          </p>
          <button className="text-white bg-purple-600 py-2 px-10 md:mt-10 rounded-full w-44">
            <Link to="/destinations">Get Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestPackage;
