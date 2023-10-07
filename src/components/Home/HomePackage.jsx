import React from "react";

import { Rating } from "@mui/material";
import SeeMore from "../Common/SeeMore";
import CustomButton from "../Common/CustomButton";
import DestinationCard from "../Common/DestinationCard";

const HomePackage = ({ destinations }) => {
  return (
    destinations && (
      <div className="mx-5 md:mx-10 lg:mx-20 my-10 md:my-20">
        <h1 className="text-center text-lg my-2 lg:my-4 font-semibold text-purple-600 md:text-left">
          Package
        </h1>

        <div className="flex flex-col justify-between md:flex-row ">
          <h1 className="text-2xl text-center  sm:text-3xl md:text-left md:w-[60%] lg:text-4xl lg:w-[60%] xl:text-5xl xl:w-[55%]">
            We Provide A Choice Of Packages Suitable For You
          </h1>
          <div>
            <SeeMore to={"/destinations"}></SeeMore>
          </div>
        </div>

        <div className="justify-between gap-5 md:gap-10 my-10  md:my-20">
          <div className="block md:hidden">
            <DestinationCard destination={destinations[0]} />
          </div>
          <div className="md:flex-row md:flex hidden">
            <div className="w-full md:w-[50%]">
              <img
                src={destinations[0].images}
                className="w-[100%] h-[100%] rounded-3xl object-cover md:rotate-2 img-glow"
              />
            </div>
            <div className="flex flex-col items-center my-4 w-full md:w-[50%]">
              <h1 className="font-bold h-[4rem] my-2 md:my-4 text-2xl md:text-xl lg:text-2xl xl:text-3xl">
                {destinations[0].name}
              </h1>
              <span className="flex flex-col xl:flex-row">
                <div className="flex">
                  <Rating
                    name="read-only"
                    value={Number(destinations[0].rating)}
                    precision={0.1}
                    readOnly
                  />
                </div>
                <p className="font-serif flex">
                  {Number(destinations[0].rating)}{" "}
                  <span className="font-bold ml-2">
                    {Number(destinations[0].price)}
                  </span>
                  /day
                </p>
              </span>
              <div className="my-4 flex justify-center items-center flex-col">
                <p className="text-sm w-[90%] text-justify sm:w-[90%] xl:w-[75%]">
                  {destinations[0].description}
                </p>
                {/* <span
              onClick={() => {
                setIsSeeMore(!isSeeMore);
              }}
              className="underline text-purple-700 italic cursor-pointer text-start"
            >
              {!isSeeMore ? "see more" : "see less"}
            </span> */}
              </div>
              <CustomButton
                label={"See Detail"}
                redirectTo={`/destination/${destinations[0].id}`}
              />
            </div>
          </div>
        </div>

        <div className="justify-between gap-5 md:gap-10 my-10 md:my-20">
          <div className="block md:hidden">
            <DestinationCard destination={destinations[1]} />
          </div>
          <div className="md:flex-row md:flex hidden">
            <div className="flex flex-col items-center my-4 w-full md:w-[50%]">
              <h1 className="font-bold h-[4rem] my-2 md:my-4 text-2xl md:text-xl lg:text-2xl xl:text-3xl">
                {destinations[1].name}
              </h1>
              <span className="flex flex-col xl:flex-row">
                <div className="flex">
                  <Rating
                    name="read-only"
                    value={Number(destinations[1].rating)}
                    precision={0.1}
                    readOnly
                  />
                </div>
                <p className="font-serif flex">
                  {Number(destinations[1].rating)}{" "}
                  <span className="font-bold ml-2">
                    {Number(destinations[1].price)}
                  </span>
                  /day
                </p>
              </span>
              <div className="my-4 flex justify-center items-center flex-col">
                <p className="text-sm w-[90%] text-justify sm:w-[90%] xl:w-[75%]">
                  {destinations[1].description}
                </p>
              </div>
              <CustomButton
                label={"See Detail"}
                redirectTo={`/destination/${destinations[1].id}`}
              />
            </div>
            <div className="w-full md:w-[50%]">
              <img
                src={destinations[1].images}
                className="w-[100%] h-[100%] rounded-3xl object-cover md:-rotate-2 img-glow"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default HomePackage;
