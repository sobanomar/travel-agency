import React from "react";

import homeAbout1 from "../../assets/home-about-1.jpg";
import homeAbout2 from "../../assets/home-about-2.jpg";
import homeAboutArrow from "../../assets/home-about-arrow.png";

const AboutUs = () => {
  return (
    <div className="flex mx-20 mb-96 mt-28">
      <div className="w-[50rem] flex relative">
        <div className="ml-28 -rotate-3">
          <img
            src={homeAbout1}
            className="rounded-lg w-[22rem] h-[35rem] object-cover shadow-[0px_0px_30px_0px] shadow-purple-700"
            alt=""
          />
        </div>
        <div className="absolute left-[25rem] rotate-3 top-[17rem] w-[25rem]">
          <img
            src={homeAbout2}
            className="rounded-lg object-cover h-[30rem] w-[90%] shadow-[0px_0px_30px_0px] shadow-purple-700"
            alt=""
          />
          <img
            className="absolute w-[23rem] left-[15rem] top-[19rem] -z-10 "
            src={homeAboutArrow}
            alt=""
          />
        </div>
      </div>
      <div className="w-[50rem] flex flex-col justify-between">
        <div className="flex flex-col gap-5">
          <p className="text-purple-700 font-semibold">About us</p>
          <h1 className="text-5xl w-[80%]">
            Visiting My Friend Travels provides beautiful dream places for you
          </h1>
        </div>
        <div className="flex flex-col ml-48 gap-3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            velit id fuga eaque asperiores odio temporibus repellat quod nemo
            sunt soluta alias blanditiis, aliquid adipisci aperiam? Laborum
            officia provident aut!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            magni saepe voluptatum culpa ipsum ducimus dolorem deserunt expedita
            doloribus mollitia et molestias animi, quam, deleniti consequuntur
            quaerat? Provident, voluptate nesciunt!
          </p>
          <div className="flex gap-8">
            <div>
              <h1 className="font-bold">Tour Guide</h1>
              <h1 className="text-5xl font-semibold">220+</h1>
            </div>
            <div>
              <h1 className="font-bold">Destinations</h1>
              <h1 className="text-5xl font-semibold">550+</h1>
            </div>
            <div>
              <h1 className="font-bold">Happy Travellers</h1>
              <h1 className="text-5xl font-semibold">50k+</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
