import React from "react";
import homeAbout1 from "../../assets/img/home-about-1.jpg";
import homeAbout2 from "../../assets/img/home-about-2.jpg";
import homeAboutArrow from "../../assets/img/home-about-arrow.png";

import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className="flex mx-20 mb-80 mt-40">
      <div className="w-[50%] flex relative">
        <div className="ml-28 -rotate-3">
          <img
            src={homeAbout1}
            className="rounded-lg w-[25rem] h-[35rem] object-cover img-glow"
            alt=""
          />
        </div>
        <div className="absolute left-[25rem] rotate-3 top-[17rem] w-[25rem]">
          <img
            src={homeAbout2}
            className="rounded-lg object-cover h-[30rem] w-[100%] img-glow"
            alt=""
          />
          <img
            className="absolute w-[23rem] left-[15rem] top-[19rem] -z-10 "
            src={homeAboutArrow}
            alt=""
          />
        </div>
      </div>
      <div className="w-[50%] flex flex-col justify-between">
        <div className="flex flex-col gap-5">
          <p className="text-purple-600 font-semibold">About us</p>
          <h1 className="text-5xl w-[80%]">
            Visiting My Friend Travels provides beautiful dream places for you
          </h1>
        </div>
        <div className="flex flex-col ml-60 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente
            aliquam odit perspiciatis molestias modi minus iure iusto velit
            quas?
          </p>
          <button className="text-white bg-purple-600 py-2 px-10 mt-10 rounded-full w-52">
            <Link to="/about">See Detail</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
