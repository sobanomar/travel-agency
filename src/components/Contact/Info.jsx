import React from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

const Info = () => {
  return (
    <>
      <div className=" border-gray-400 border-t py-7 px-20 flex justify-around">
        <div className="flex">
          <PhoneOutlinedIcon className="m-1" />
          <h1 className="font-semibold text-xl">+123456789</h1>
        </div>
        <div className="flex">
          <EmailOutlinedIcon className="m-1" />
          <h1 className="font-semibold text-xl">
            visitingmyfriendtravels@gmail.com
          </h1>
        </div>
        <div className="flex">
          <FmdGoodOutlinedIcon className="m-1" />
          <h1 className="font-semibold text-xl">Your Location</h1>
        </div>
        <div className="flex">
          <PublicOutlinedIcon className="m-1" />
          <h1 className="font-semibold text-xl">visitingmyfriendtravels.com</h1>
        </div>
      </div>
    </>
  );
};

export default Info;
