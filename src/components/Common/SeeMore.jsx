import { ArrowForward } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const SeeMore = ({ to }) => {
  return (
    <div>
      <Link
        to={to}
        className="text-sm hidden md:block text-purple-600 hover:text-purple-800 hover:scale-110 transition duration-300 font-semibold cursor-pointer"
      >
        <div className="">
          <span>See more</span>
          <ArrowForward />
        </div>
      </Link>
    </div>
  );
};

export default SeeMore;
