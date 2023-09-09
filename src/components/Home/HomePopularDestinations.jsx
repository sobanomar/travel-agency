import React, { useEffect, useState } from "react";
import pic1 from "../../assets/img/home-popular-des-1.jpg";
import pic2 from "../../assets/img/home-popular-des-2.jpg";
import pic3 from "../../assets/img/home-popular-des-3.jpg";
import filledStar from "../../assets/img/home-popular-des-filledStar.png";
import hollowStar from "../../assets/img/home-popular-des-hollowStar.png";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
const DestinationsPopularDestinations = ({ destinations }) => {
  return (
    destinations && (
      <div className="mx-5 md:mx-10 lg:mx-20 my-10 md:my-20">
        <h1 className="text-md text-center text-purple-600 font-semibold lg:text-left">
          Popular Destination
        </h1>
        <div className="flex flex-col justify-between md:flex-row">
          <h1 className="text-3xl my-4 w-[100%] md:w-[80%] text-center md:text-4xl lg:text-5xl lg:text-left lg:w-[60%] xl:text-6xl">
            Popular Destination Of This Year For You{" "}
          </h1>
          <div>
            <Link
              to={"/destinations"}
              className="text-sm hidden md:block text-purple-600 font-semibold cursor-pointer"
            >
              <span className="m-1">See more</span>
              <ArrowForward className="mb-0.5" />
            </Link>
          </div>
        </div>

        <div className="flex md:h-[45rem] gap-10 md:gap-0 flex-col justify-between my-4 md:my-10 lg:my-16 md:flex-row">
          <div className="md:w-[30%]">
            <div className="w-[100%] h-[60%]">
              <img
                src={destinations[0]?.images}
                className="rounded-3xl h-[20rem] md:h-[100%] w-[100%] object-cover img-glow md:rotate-2"
              />
            </div>
            <div className="flex flex-col items-center my-4">
              <h1 className="font-bold my-2 md:my-4 text-2xl md:text-xl lg:text-2xl xl:text-3xl">
                {destinations[0]?.name}
              </h1>
              <span className="flex flex-col xl:flex-row">
                <div className="flex">
                  <Rating
                    name="read-only"
                    value={Number(destinations[0]?.rating)}
                    precision={0.1}
                    readOnly
                  />
                </div>
                <p className="font-serif flex">
                  {Number(destinations[0]?.rating)}{" "}
                  <span className="font-bold ml-2">
                    {Number(destinations[0]?.price)}
                  </span>
                  /day
                </p>
              </span>
              <div className="my-4 flex justify-center">
                <p className="text-sm w-[90%] sm:w-[80%] xl:w-[75%]">
                  {destinations[0]?.description}
                </p>
              </div>
              <Link
                to={`/destination/${destinations[0]?.id}`}
                className="text-white bg-purple-600 text-lg px-8 rounded-full py-2"
              >
                See detail
              </Link>
            </div>
          </div>
          <div className="md:w-[30%]">
            <div className="w-[100%] h-[60%]">
              <img
                src={destinations[1]?.images}
                className="rounded-3xl h-[20rem] md:h-[100%] w-[100%] object-cover img-glow md:-rotate-2"
              />
            </div>
            <div className="flex flex-col items-center my-4">
              <h1 className="font-bold my-2 md:my-4 text-2xl md:text-xl lg:text-2xl xl:text-3xl">
                {destinations[1]?.name}
              </h1>
              <span className="flex flex-col xl:flex-row">
                <div className="flex">
                  <Rating
                    name="read-only"
                    value={Number(destinations[1]?.rating)}
                    precision={0.1}
                    readOnly
                  />
                </div>
                <p className="font-serif flex">
                  {Number(destinations[1]?.rating)}{" "}
                  <span className="font-bold ml-2">
                    {Number(destinations[1]?.price)}
                  </span>
                  /day
                </p>
              </span>
              <div className="my-4 flex justify-center">
                <p className="text-sm w-[90%] sm:w-[80%] xl:w-[75%]">
                  {destinations[1]?.description}
                </p>
              </div>
              <Link
                to={`/destination/${destinations[1]?.id}`}
                className="text-white bg-purple-600 text-lg px-8 rounded-full py-2"
              >
                See detail
              </Link>
            </div>
          </div>
          <div className="md:w-[30%]">
            <div className="w-[100%] h-[60%] bg-purple-700 rounded-3xl text-4xl font-semibold text-white img-glow items-center flex justify-center">
              Coming Soon
            </div>
            <div className="flex flex-col items-center my-4">
              <h1 className="font-bold my-2 md:my-4 text-2xl md:text-xl lg:text-2xl xl:text-3xl">
                Coming Soon
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DestinationsPopularDestinations;
