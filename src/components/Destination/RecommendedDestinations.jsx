import React from "react";
import pic1 from "../../assets/img/home-popular-des-1.jpg";
import pic2 from "../../assets/img/home-popular-des-2.jpg";
import pic3 from "../../assets/img/home-popular-des-3.jpg";
import filledStar from "../../assets/img/home-popular-des-filledStar.png";
import hollowStar from "../../assets/img/home-popular-des-hollowStar.png";

const RecommendedDestinations = () => {
  return (
    <div className="mx-20 mt-20">
      <h1 className=" text-md text-purple-600 text-center">
        Recommended Destination
      </h1>
      <h1 className="text-7xl mt-5">Most Popular Destination This Month</h1>
      <div className="flex justify-between gap-28 mt-20">
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
      </div>
    </div>
  );
};

export default RecommendedDestinations;
