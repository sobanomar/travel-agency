import React from "react";

import mapRight from "../../assets/img/vision-map-right.png";
import mapLeft from "../../assets/img/vision-map-left.png";
import arrowUpper from "../../assets/img/arrow-Upper.png";
import arrowLower from "../../assets/img/arrow-lower.png";

const AboutVisionMission = () => {
  return (
    <div className="">
      <div className="flex mx-5 flex-col md:flex-row md:mx-10 lg:mx-20 md:my-40 lg:my-52 justify-around gap-5">
        <div className="w-[100%] md:[100%]">
          <h3 className="text-purple-500 font-semibold text-center">Vision</h3>
          <h1 className="text-3xl md:text-5xl my-4 mx-2 text-center">
            Our Vision
          </h1>
          <div className="flex flex-col gap-3">
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              molestiae maxime cupiditate sed modi quas enim sunt iure dolor
              provident, beatae laborum aliquam, nesciunt libero ad, doloribus
              ipsum culpa distinctio!
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minus modi dolorum non deleniti error, at officiis, neque a vitae
              nesciunt, voluptatem earum obcaecati ducimus ipsam voluptatum ut
              perspiciatis. Eius!
            </p>
          </div>
        </div>
        <div className="w-[100%] md:[100%] md:mt-40">
          <h3 className="text-purple-500 font-semibold text-center">Mission</h3>
          <h1 className="text-3xl md:text-5xl my-4 text-center">Our Mission</h1>
          <div className="flex flex-col gap-3">
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              molestiae maxime cupiditate sed modi quas enim sunt iure dolor
              provident, beatae laborum aliquam, nesciunt libero ad, doloribus
              ipsum culpa distinctio!
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minus modi dolorum non deleniti error, at officiis, neque a vitae
              nesciunt, voluptatem earum obcaecati ducimus ipsam voluptatum ut
              perspiciatis. Eius!
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute top-[-40rem] md:top-[-50rem] left-[40%] md:left-[60%] w-[60%] md:w-[40%]"
          src={mapRight}
          alt=""
        />
        <img
          className="absolute top-[-24rem] w-[60%] md:w-[35%]"
          src={mapLeft}
          alt=""
        />
        <img
          className="hidden md:block md:absolute lg:top-[-40rem] lg:left-[40%] md:top-[-45rem] md:left-[45%] w-[30%]"
          src={arrowUpper}
          alt=""
        />
        <img
          className="hidden md:block md:absolute lg:top-[-14rem] lg:left-[30%] md:top-[-13rem] md:left-[30%] w-[30%]"
          src={arrowLower}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutVisionMission;
