import React from "react";
import pic1 from "../../assets/img/home-popular-des-1.webp";
import pic2 from "../../assets/img/home-popular-des-2.webp";

import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const RecommendedDestinations = () => {
  return (
    <div className="mx-5 md:my-20 md:mx-20">
      <h1 className=" text-md font-semibold text-purple-600 text-center">
        Recommended Destination
      </h1>
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center my-5 lg:my-8">
        Most Popular Destinations This Month
      </h1>
      <div className="flex gap-10 md:gap-0 flex-col justify-around my-4 md:my-10 lg:my-16 md:flex-row">
        <div className="w-[100%] md:w-[50%] flex-col flex items-center">
          <div className="w-[100%] md:w-[80%] lg:w-[60%]">
            <img
              src={pic1}
              className="h-[20rem] sm:h-[25rem] md:h-[30rem] w-[100%] rounded-3xl object-cover img-glow md:rotate-2"
            />
          </div>
          <div className="flex flex-col items-center my-4 md:w-[80%] lg:w-[60%]">
            <h1 className="font-bold my-2 md:my-4 text-2xl md:text-xl lg:text-2xl xl:text-3xl">
              Raja Ampat, Papua
            </h1>
            <div className="flex flex-col md:flex-row">
              <div style={{ color: "orange" }} className="flex justify-center">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
              </div>
              <p className="flex font-semibold">
                <span className="text-xl line-through font-thin mx-1">
                  $225,99
                </span>
                <span className="text-xl mx-1">
                  $185,99<span className="text-sm font-thin">/day</span>
                </span>
              </p>
            </div>
            <div className="my-4 flex justify-center">
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem repellat esse harum inventore rerum temporibus.
              </p>
            </div>
            <button className="text-white bg-purple-600 text-lg px-8 rounded-full py-2">
              See detail
            </button>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] flex-col flex items-center">
          <div className="w-[100%] md:w-[80%] lg:w-[60%]">
            <img
              src={pic2}
              className="h-[20rem] sm:h-[25rem] md:h-[30rem] w-[100%] rounded-3xl object-cover img-glow md:rotate-2"
            />
          </div>
          <div className="flex flex-col items-center my-4 md:w-[80%] lg:w-[60%]">
            <h1 className="font-bold my-2 md:my-4 text-2xl md:text-xl lg:text-2xl xl:text-3xl">
              Raja Ampat, Papua
            </h1>
            <div className="flex flex-col md:flex-row">
              <div style={{ color: "orange" }} className="flex justify-center">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
              </div>
              <p className="flex font-semibold">
                <span className="text-xl line-through font-thin mx-1">
                  $225,99
                </span>
                <span className="text-xl mx-1">
                  $185,99<span className="text-sm font-thin">/day</span>
                </span>
              </p>
            </div>
            <div className="my-4 flex justify-center">
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem repellat esse harum inventore rerum temporibus.
              </p>
            </div>
            <button className="text-white bg-purple-600 text-lg px-8 rounded-full py-2">
              See detail
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between gap-28 mt-20">
        <div className="w-[100%] ">
          <div className="w-[100%]  ">
            <img
              src={pic1}
              className="rotate-2 rounded-3xl w-[100%] h-[60%] object-cover img-glow"
            />
          </div>
          <h1 className="mt-10 font-bold font-serif text-3xl">
            Raja Ampat, Papua
          </h1>
          <span className="flex gap-10">
            <div className="flex h-[50%] mt-5">
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={hollowStar} className="h-[50%]" />
            </div>
            <p className="mx-2 font-serif mt-5  flex flex-col">
              <span className="text-md  line-through">$225,99</span>
              <span className="text-lg font-bold ">
                $185,99<span className="text-md font-normal">/day</span>
              </span>
            </p>
          </span>
          <div className="h-[5rem]">
            <p className="text-sm w-[70%] mt-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem repellat esse harum inventore rerum temporibus.
            </p>
          </div>
          <button className="text-white bg-purple-600 text-lg px-8 rounded-full py-2 mt-5">
            See detail
          </button>
        </div>
        <div className="w-[100%] mt-32">
          <div className="w-[100%]  ">
            <img
              src={pic1}
              className="-rotate-2 rounded-3xl w-[100%] h-[60%] object-cover img-glow"
            />
          </div>
          <h1 className="mt-10 font-bold font-serif text-3xl">
            Raja Ampat, Papua
          </h1>
          <span className="flex gap-10">
            <div className="flex h-[50%] mt-5">
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={hollowStar} className="h-[50%]" />
            </div>
            <p className="mx-2 font-serif mt-5  flex flex-col">
              <span className="text-md  line-through">$225,99</span>
              <span className="text-lg font-bold ">
                $185,99<span className="text-md font-normal">/day</span>
              </span>
            </p>
          </span>
          <div className="h-[5rem]">
            <p className="text-sm w-[70%] mt-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem repellat esse harum inventore rerum temporibus.
            </p>
          </div>
          <button className="text-white bg-purple-600 text-lg px-8 rounded-full py-2 mt-5">
            See detail
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default RecommendedDestinations;
