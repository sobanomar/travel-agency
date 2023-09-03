import React from "react";
import pic1 from "../../assets/home-popular-des-1.jpg";
import pic2 from "../../assets/home-popular-des-2.jpg";
import pic3 from "../../assets/home-popular-des-3.jpg";
import filledStar from "../../assets/home-popular-des-filledStar.png";
import hollowStar from "../../assets/home-popular-des-hollowStar.png";

const HomePopularDestinations = () => {
  return (
    <div className="mx-20">
      <h1 className="text-left text-sm mt-20">Popular Destination</h1>
      <div className="flex justify-between">
        <h1 className="text-5xl mt-5 w-[40%]">
          Popular Destination Of This Year For You{" "}
        </h1>
        <div>
          <h1 className="text-sm mt-14">See more -/</h1>
        </div>
      </div>
      <div className="flex gap-28 mt-20">
        <div className="w-[100%]">
          <div className="w-[100%]  ">
            <img
              src={pic1}
              className="rotate-2 rounded-3xl w-[100%] h-[60%] object-cover "
            />
          </div>
          <h1 className="mt-10 font-bold font-serif text-3xl">
            Raja Ampat, Papua
          </h1>
          <span className="flex">
            <div className="flex h-[50%] mt-5">
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={hollowStar} className="h-[50%]" />
            </div>
            <p className="mx-2 font-serif mt-5 flex">
              4/5 <span className="font-bold ml-2">$225,99/</span>day
            </p>
          </span>
          <p className="text-sm w-[70%] mt-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            culpa accusantium voluptatibus magnam, quia provident.
          </p>
          <button className="text-white bg-green-600 text-lg px-8 rounded-full py-2 mt-10">
            See detail
          </button>
        </div>
        <div className="w-[100%]">
          <div className="w-[100%]  ">
            <img
              src={pic2}
              className="-rotate-2 rounded-3xl w-[100%] h-[60%] object-cover "
            />
          </div>
          <h1 className="mt-10 font-bold font-serif text-3xl">
            Raja Ampat, Papua
          </h1>
          <span className="flex">
            <div className="flex h-[50%] mt-5">
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={hollowStar} className="h-[50%]" />
            </div>
            <p className="mx-2 font-serif mt-5 flex">
              4/5 <span className="font-bold ml-2">$225,99/</span>day
            </p>
          </span>
          <p className="text-sm w-[90%] mt-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            culpa accusantium voluptatibus magnam, quia provident.
          </p>
          <button className="text-white bg-green-600 text-lg px-8 rounded-full py-2 mt-10">
            See detail
          </button>
        </div>
        <div className="w-[100%]">
          <div className="w-[100%]  ">
            <img
              src={pic3}
              className="rotate-2 rounded-3xl w-[100%] h-[60%] object-cover "
            />
          </div>
          <h1 className="mt-10 font-bold font-serif text-3xl">
            Raja Ampat, Papua
          </h1>
          <span className="flex">
            <div className="flex h-[50%] mt-5">
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={hollowStar} className="h-[50%]" />
            </div>
            <p className="mx-2 font-serif mt-5 flex">
              4/5 <span className="font-bold ml-2">$225,99/</span>day
            </p>
          </span>
          <p className="text-sm w-[70%] mt-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            culpa accusantium voluptatibus magnam, quia provident.
          </p>
          <button className="text-white bg-green-600 text-lg px-8 rounded-full py-2 mt-10">
            See detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePopularDestinations;
