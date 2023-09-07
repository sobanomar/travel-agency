import React from "react";
import bestPackage from "../../assets/img/best-package.jpg";
import mapLeft from "../../assets/img/best-package-left.png";
import mapRight from "../../assets/img/best-package-right.png";

const BestPackage = () => {
  return (
    <div className="my-5 sm:my-10 md:my-20 relative h-[20rem] sm:h-[30rem]">
      <div>
        <img
          className="absolute w-[40%] top-[23%] hidden"
          src={mapLeft}
          alt=""
        />
        <img className="absolute left-[60%] w-[40%]" src={mapRight} alt="" />
      </div>
      <div className="flex justify-center">
        <div className="absolute text-white flex flex-col text-center items-center sm:w-[70%] ">
          <h1 className="text-2xl mt-16 sm:mt-28 sm:text-3xl md:text-5xl lg:text-6xl ">
            Best Holiday package For You
          </h1>
          <p className="m-2 text-center sm:text-lg md:text-xl font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            praesentium, veniam soluta eligendi atque sit laudantium ipsam?
            Porro, nihil perferendis?
          </p>
          <button className="text-white bg-purple-600 py-2 px-10 md:mt-10 rounded-full w-44">
            Get Now
          </button>
        </div>
      </div>

      <div className="z-1 h-full">
        <img
          src={bestPackage}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default BestPackage;
