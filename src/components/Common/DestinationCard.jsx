import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const DestinationCard = ({ destination }) => {
  const [isSeeMore, setIsSeeMore] = useState(false);

  return (
    <div
      key={destination.id}
      className="md:w-[30%] my-4 hover:scale-[1.05] transition duration-500"
    >
      <div className="w-[100%]">
        <img
          src={destination.images}
          className="rounded-3xl h-[20rem] md:h-[25rem] w-[100%] object-cover img-glow"
        />
      </div>
      <div className="flex flex-col items-center my-2">
        <h1 className="font-bold h-[4rem] my-2 md:my-4 text-2xl md:text-xl lg:text-2xl xl:text-3xl">
          {destination.name}
        </h1>
        <span className="flex flex-col xl:flex-row">
          <div className="flex">
            <Rating
              name="read-only"
              value={Number(destination.rating)}
              precision={0.1}
              readOnly
            />
          </div>
          <p className="font-serif flex">
            {Number(destination.rating)}{" "}
            <span className="font-bold ml-2">{Number(destination.price)}</span>
            /day
          </p>
        </span>
        <div className="my-4 flex justify-center items-center flex-col">
          <p className="text-sm w-[90%] text-justify sm:w-[90%] xl:w-[75%]">
            {!isSeeMore
              ? destination.description.substring(0, 180) + "..."
              : destination.description}
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
          label="See Details"
          redirectTo={`/destinations/${destination.id}`}
        />
      </div>
    </div>
  );
};

export default DestinationCard;
