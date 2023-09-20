import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ label, redirectTo }) => {
  return (
    <>
      <Link
        to={redirectTo}
        className="text-white hover:bg-purple-900 bg-purple-700 text-center py-2 px-5 my-4 rounded-full md:w-[10rem] transition-all duration-500"
      >
        {label}
      </Link>
    </>
  );
};

export default CustomButton;
