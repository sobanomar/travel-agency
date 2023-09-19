import React from "react";
import DestinationCard from "../Common/DestinationCard";
import SeeMore from "../Common/SeeMore";
const PopularDestinations = ({ destinations }) => {
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
            <SeeMore to="/destinations" />
          </div>
        </div>

        <div className="w-full flex flex-col justify-between my-4 md:my-10 lg:my-16 md:flex-row flex-wrap">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
          {/*
          <div className="md:w-[30%]">
            <div className="w-[100%] h-[20rem] md:h-[25rem] bg-purple-700 rounded-3xl text-3xl font-semibold text-white img-glow items-center flex justify-center">
              Coming Soon
            </div>
            <div className="flex flex-col items-center my-4">
              <h1 className="font-bold my-2 md:my-4 text-2xl md:text-xl lg:text-2xl xl:text-3xl">
                Coming Soon
              </h1>
            </div>
          </div> */}
        </div>
      </div>
    )
  );
};

export default PopularDestinations;
