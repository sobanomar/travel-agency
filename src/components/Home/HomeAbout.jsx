import React from "react";

import homeAbout1 from "../../assets/img/home-about-1.webp";
import homeAbout2 from "../../assets/img/home-about-2.webp";
import homeAboutArrow from "../../assets/img/home-about-arrow.png";
import CustomButton from "../Common/CustomButton";

const HomeAbout = () => {
  return (
    <div className="flex mx-5 md:mx-20 my-5 md:my-20 lg:my-40 flex-col md:flex-row">
      <div className="w-[100%] md:w-[50%] md:flex flex-col relative">
        <div className="w-[100%] h-[20rem] md:w-[70%] lg:w-[60%] md:h-[65%]">
          <img
            src={homeAbout1}
            className="rounded-lg w-[100%] h-full lg:w-[100%] lg:h-[100%] md:w-[100%] md:h-[80%] object-cover img-glow md:-rotate-3"
            alt=""
          />
        </div>
        <div className="w-[100%] h-[20rem] mt-5  md:w-[65%] md:h-[65%] lg:w-[60%]  lg:h-[65%]  md:absolute md:ml-[20%] lg:ml-[40%] md:mt-[65%] lg:mt-[40%]">
          <img
            src={homeAbout2}
            className="rounded-lg h-full w-[100%] object-cover lg:w-[100%] lg:h-[100%] md:w-[100%] md:h-[80%] img-glow md:rotate-3"
            alt=""
          />
          <img
            className="absolute w-[80%] left-[80%] top-[60%] -z-10 hidden"
            src={homeAboutArrow}
            alt=""
          />
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] my-5 md:m-0 flex flex-col justify-around">
        <div className="flex flex-col text-center md:text-left">
          <p className="text-purple-700 font-semibold ">About us</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl my-2">
            Visiting My Friend Travels provides beautiful dream places for you
          </h1>
        </div>
        <div className="flex flex-col gap-3 md:ml-10 md:mt-10 lg:ml-20 lg:mt-20 items-center md:items-start">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            velit id fuga eaque asperiores odio temporibus repellat quod nemo
            sunt soluta alias blanditiis, aliquid adipisci aperiam? Laborum
            officia provident aut!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            velit id fuga eaque asperiores odio temporibus repellat quod nemo
            sunt soluta alias blanditiis, aliquid adipisci aperiam? Laborum
            officia provident aut!
          </p>
          <CustomButton label={"See Detail"} redirectTo={"/about"} />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
