import React from "react";
import welcomeArrow from "../../assets/img/welcome-arrow.png";

const AboutWelcome = ({ founder }) => {
  return (
    founder && (
      <>
        <div className="my-10 mx-5 md:my-20 lg:mt-60 lg:mb-20 lg:mx-20 relative">
          <div className="absolute md:left-[50%]">
            <img
              src={welcomeArrow}
              alt=""
              className="w-32 md:w-[75%] hidden lg:block"
            />
          </div>
          <div className="text-center m-5 sm:m-10 md:w-[70%] md:m-auto lg:ml-[25%] lg:w-96 lg:text-left">
            <h3 className="text-purple-500 font-semibold">Welcome</h3>
            <h1 className="text-3xl md:text-5xl text-left sm:text-center md:text-left">
              Hello Traveler, Welcome To Our Travel Agency
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center my-4 md:m-10 lg:my-20">
            <div className="w-full md:w-[30rem]">
              <img
                src={founder[0].image}
                className="h-[25rem] w-full md:w-full md:h-[33rem] object-cover object-left rounded-2xl img-glow"
                alt="img here"
              />
            </div>
            <div className="w-full md:w-[30rem] md:flex md:flex-col md:justify-center ml-4 md:ml-8">
              <p className="my-4">{founder[0].message}</p>

              <h1 className="text-center md:text-left font-semibold text-xl my-4 text-purple-500">
                {founder[0].name}
              </h1>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default AboutWelcome;
