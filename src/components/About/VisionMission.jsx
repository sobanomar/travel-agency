import React from "react";

import mapRight from "../../assets/vision-map-right.png";
import mapLeft from "../../assets/vision-map-left.png";
import arrowUpper from "../../assets/arrow-Upper.png";
import arrowLower from "../../assets/arrow-lower.png";

const VisionMission = () => {
  return (
    <div className="">
      <div className="flex mx-20 my-32 justify-around">
        <div className="w-[35rem]">
          <h3 className="text-green-500">Vision</h3>
          <h1 className="text-5xl my-4 mx-2">Our Vision</h1>
          <div className="p-4">
            <p className="p-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              molestiae maxime cupiditate sed modi quas enim sunt iure dolor
              provident, beatae laborum aliquam, nesciunt libero ad, doloribus
              ipsum culpa distinctio!
            </p>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minus modi dolorum non deleniti error, at officiis, neque a vitae
              nesciunt, voluptatem earum obcaecati ducimus ipsam voluptatum ut
              perspiciatis. Eius!
            </p>
          </div>
        </div>
        <div className="w-[35rem] mt-40">
          <h3 className="text-green-500">Mission</h3>
          <h1 className="text-5xl my-4 mx-2">Our Mission</h1>
          <div className="p-2">
            <p className="p-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              molestiae maxime cupiditate sed modi quas enim sunt iure dolor
              provident, beatae laborum aliquam, nesciunt libero ad, doloribus
              ipsum culpa distinctio!
            </p>
            <p className="p-2">
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
          className="absolute top-[-50rem] left-[60rem] w-[35rem]"
          src={mapRight}
          alt=""
        />
        <img className="absolute top-[-24rem] w-[27rem]" src={mapLeft} alt="" />
        <img
          className="absolute top-[-40rem] left-[30rem] w-[25rem]"
          src={arrowUpper}
          alt=""
        />
        <img
          className="absolute top-[-15rem] w-[25rem] left-[25rem]"
          src={arrowLower}
          alt=""
        />
      </div>
    </div>
  );
};

export default VisionMission;
