import React from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

const Info = () => {
  return (
    <>
      <div className=" border-gray-400 border-t py-7 sm-20 flex justify-around md:flex-row  flex-col mx-4">
        <div className="flex ">
          <PhoneOutlinedIcon className="m-1" />
          <h1 className="font-semibold lg:text-xl sm:text-sm sm:m-1 lg:m-0">
            +123456789
          </h1>
        </div>
        <div className="flex ">
          <EmailOutlinedIcon className="m-1" />
          <h1 className="font-semibold lg:text-xl sm:text-sm sm:m-1 lg:m-0">
            visitingmyfriendtravels@gmail.com
          </h1>
        </div>
        <div className="flex ">
          <FmdGoodOutlinedIcon className="m-1" />
          <h1 className="font-semibold lg:text-xl sm:text-sm sm:m-1 lg:m-0">
            Your Location
          </h1>
        </div>
        <div className="flex">
          <PublicOutlinedIcon className="m-1" />
          <h1 className="font-semibold lg:text-xl sm:text-sm sm:m-1 lg:m-0">
            visitingmyfriendtravels.com
          </h1>
        </div>
      </div>
    </>
  );
};

export default Info;
