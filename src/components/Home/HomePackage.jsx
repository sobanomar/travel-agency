import React from "react";
import pic1 from "../../assets/home-package-1.jpg";
import pic2 from "../../assets/home-package-2.jpg";
import filledStar from "../../assets/home-popular-des-filledStar.png";
import hollowStar from "../../assets/home-popular-des-hollowStar.png";

import ArrowForward from "@mui/icons-material/ArrowForward";

const HomePackage = () => {
  return (
    <div className="mx-20">
      <h1 className="text-left text-sm mt-20 text-purple-600 font-semibold">
        Package
      </h1>
      <div className="flex gap-10 justify-between">
        <h1 className="text-5xl mt-5 w-[50%]">
          We Provide A Choice Of Packages Suitable For You
        </h1>
        <div>
          <h1 className="text-sm  text-purple-600 font-semibold cursor-pointer">
            <span className="m-1">See more</span>
            <ArrowForward className="mb-0.5" />
          </h1>
        </div>
      </div>
      <div className="flex mt-20 ">
        <div className="w-[100%] ">
          <img
            src={pic1}
            className="w-[100%] h-[100%] rounded-3xl object-cover rotate-2 img-glow"
          />
        </div>
        <div className="flex flex-col mx-28 mt-10">
          {/* name & price */}
          <span className="flex gap-2">
            <h1 className="text-5xl font-bold">Thailand | </h1>
            <h1 className="text-3xl font-bold mt-[12px]"> $300 /</h1>
            <h1 className="text-lg mt-[19px]">2 days</h1>
          </span>
          {/* location & rating */}
          <div className="flex gap-30 mt-3">
            <div className="flex h-[50%] mt-5">
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={hollowStar} className="h-[80%]" />
              <h1 className="text-lg mx-7">4/5</h1>
            </div>
            <div className="flex mx-20 gap-2 mt-5">
              <h1>I</h1>
              <h1 className="mx-5">Bangkok, Chiang Mai, Phuket</h1>
            </div>
          </div>
          <div className="mt-3">
            {/* loremtext */}
            <p className="text-sm w-[70%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit, laudantium porro ullam, sit esse delectus harum
              numquam deserunt cumque, sequi nobis eos vero cupiditate magni
              exercitationem adipisci doloribus? Repellendus exercitationem
              possimus quod temporibus illo, earum animi distinctio rerum fugit
              numquam doloremque itaque ullam vel molestiae quisquam a quasi
              laborum neque quis, accusantium molestias veniam nihil iure.
              Eveniet hic modi veniam?
            </p>
          </div>
          <button className="text-white bg-purple-600 text-lg px-8 rounded-full py-2 mt-10 w-[25%]">
            See detail
          </button>
        </div>
      </div>

      <div className="flex mt-28">
        <div className="flex flex-col mx-20 mt-10 ">
          {/* name & price */}
          <span className="flex gap-2">
            <h1 className="text-5xl font-bold">India | </h1>
            <h1 className="text-3xl font-bold mt-[12px]"> $300 /</h1>
            <h1 className="text-lg mt-[19px]">2 days</h1>
          </span>
          {/* location & rating */}
          <div className="flex gap-30 mt-3">
            <div className="flex h-[50%] mt-5">
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={filledStar} />
              <img src={hollowStar} className="h-[80%]" />
              <h1 className="text-lg mx-7">4/5</h1>
            </div>
            <div className="flex mx-20 gap-2 mt-5">
              <h1>I</h1>
              <h1 className="mx-5">Bangkok, Chiang Mai, Phuket</h1>
            </div>
          </div>
          <div className="mt-3">
            {/* loremtext */}
            <p className="text-sm w-[75%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit, laudantium porro ullam, sit esse delectus harum
              numquam deserunt cumque, sequi nobis eos vero cupiditate magni
              exercitationem adipisci doloribus? Repellendus exercitationem
              possimus quod temporibus illo, earum animi distinctio rerum fugit
              numquam doloremque itaque ullam vel molestiae quisquam a quasi
              laborum neque quis, accusantium molestias veniam nihil iure.
              Eveniet hic modi veniam?
            </p>
          </div>
          <button className="text-white bg-purple-600 text-lg px-8 rounded-full py-2 mt-10 w-[25%] ">
            See detail
          </button>
        </div>
        <div className="w-[100%] ">
          <img
            src={pic2}
            className="w-[100%] h-[100%] rounded-3xl object-cover -rotate-2 img-glow"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePackage;
