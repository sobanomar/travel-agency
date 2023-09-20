import React from "react";
// import DestinationImage from "../assets/img/destination-detail-1.jpg";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../Common/CustomButton";

const DestinationDetails = ({ destination }) => {
  return (
    <div className="mx-5 md:mx-10 lg:mx-20 my-10 mt-20">
      <div className="w-full h-[30rem] md:my-10">
        <img
          className=" w-full h-full object-cover img-glow rounded-3xl md:rotate-2"
          src={destination?.images}
          alt="Destination Image"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-10 md:py-10 md:items-start   ">
        <div className="flex flex-col md:w-[50%] items-center md:items-start">
          <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl">
            {destination?.name}
          </h1>
          <div className="flex my-5">
            <div className="flex">
              <Rating
                name="read-only"
                value={Number(destination?.rating)}
                precision={0.1}
                readOnly
              />
              <h1 className="hidden text-md mx-5 md:block">
                {destination?.rating}
              </h1>
            </div>
            <div>
              <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                {destination?.price}
                <span className="text-sm xl:text-lg font-normal">/day</span>
              </h1>
            </div>
          </div>
          <p className="text-lg">{destination?.description}</p>
          {destination && (
            <CustomButton
              label={"Book Now"}
              redirectTo={`/booking/auto/${destination.id}`}
            />
          )}
        </div>
        <div className=" md:mx-10 lg:mx-14 xl:mx-20">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold my-2">
            Facilities Included
          </h1>
          <div className="flex justify-center">
            <div className="flex flex-col gap-2 md:gap-3 my-6">
              {destination?.facilities.map((facility) => (
                <h1
                  key={facility.name}
                  className="text-lg md:text-xl lg:text-2xl"
                >
                  <span>
                    <CheckBoxIcon className="mb-2 mr-2" color="success" />
                  </span>
                  {facility?.name}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
