import React from "react";
import pic1 from "../../assets/img/home-package-1.jpg";
import pic2 from "../../assets/img/home-package-2.jpg";
import filledStar from "../../assets/img/home-popular-des-filledStar.png";
import hollowStar from "../../assets/img/home-popular-des-hollowStar.png";

import ArrowForward from "@mui/icons-material/ArrowForward";

const HomePackage = () => {
  return (
    <div className="mx-5 md:mx-10 lg:mx-20 my-10 md:my-20">
      <h1 className="text-center text-lg my-2 lg:my-4 font-semibold text-purple-600 md:text-left">
        Package
      </h1>
      <div className="flex flex-col justify-between md:flex-row ">
        <h1 className="text-2xl text-center  sm:text-3xl md:text-left md:w-[60%] lg:text-4xl lg:w-[60%] xl:text-5xl xl:w-[55%]">
          We Provide A Choice Of Packages Suitable For You
        </h1>
        <h1 className="text-sm text-center mt-4  text-purple-600 font-semibold cursor-pointer">
          <span className="m-1">See more</span>
          <ArrowForward className="mb-0.5" />
        </h1>
      </div>

      <div className="flex flex-col justify-between gap-5 md:gap-10 my-10  md:my-20 md:flex-row   ">
        <div className="w-[100%] ">
          <img
            src={pic1}
            className="w-[100%] h-[100%] rounded-3xl object-cover md:rotate-2 img-glow"
          />
        </div>
        <div className="flex flex-col my-2 w-[100%] md:my-10">
          <span className="flex gap-2">
            <h1 className="text-2xl font-bold lg:text-3xl xl:text-4xl">
              Thailand |{" "}
            </h1>
            <h1 className="text-xl font-bold mt-0.5 lg:text-2xl xl:text-3xl xl:mt-1">
              {" "}
              $300 /
            </h1>
            <h1 className="text-md mt-1 lg:mt-2 xl:text-lg xl:mt-3">2 days</h1>
          </span>

          <div className="flex flex-col mt-3  lg:flex-row lg:gap-28 ">
            <div className="flex  ">
              <img src={filledStar} className="h-[80%] xl:h-[100%]" />
              <img src={filledStar} className="h-[80%] xl:h-[100%]" />
              <img src={filledStar} className="h-[80%] xl:h-[100%]" />
              <img src={filledStar} className="h-[80%] xl:h-[100%]" />
              <img src={hollowStar} className="h-[65%] xl:h-[85%]" />
              <h1 className="hidden text-md mx-5 md:block">4/5</h1>
            </div>
            <div className="flex gap-5 mt-2 md:mt-0">
              <h1 className="hidden lg:block">|</h1>
              <h1 className="">Bangkok, Chiang Mai, Phuket</h1>
            </div>
          </div>
          <div className="my-4">
            <p className="text-sm lg:mt-3 xl:mt-0">
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
          <div className="flex justify-center md:justify-start">
            <button className="text-white bg-purple-600 text-lg px-8 rounded-full py-2 my-2 md:my-5">
              See detail
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between gap-5 md:gap-10 my-10 md:my-20 md:flex-row   ">
        <div className="flex flex-col my-2 w-[100%] md:my-10">
          <span className="flex gap-2">
            <h1 className="text-2xl font-bold lg:text-3xl xl:text-4xl">
              Thailand |{" "}
            </h1>
            <h1 className="text-xl font-bold mt-0.5 lg:text-2xl xl:text-3xl xl:mt-1">
              {" "}
              $300 /
            </h1>
            <h1 className="text-md mt-1 lg:mt-2 xl:text-lg xl:mt-3">2 days</h1>
          </span>

          <div className="flex flex-col mt-3  lg:flex-row lg:gap-28  ">
            <div className="flex  ">
              <img src={filledStar} className="h-[80%] xl:h-[100%]" />
              <img src={filledStar} className="h-[80%] xl:h-[100%]" />
              <img src={filledStar} className="h-[80%] xl:h-[100%]" />
              <img src={filledStar} className="h-[80%] xl:h-[100%]" />
              <img src={hollowStar} className="h-[65%] xl:h-[85%]" />
              <h1 className="hidden text-md mx-5 md:block">4/5</h1>
            </div>
            <div className="flex gap-5">
              <h1 className="hidden lg:block">|</h1>
              <h1 className="">Bangkok, Chiang Mai, Phuket</h1>
            </div>
          </div>
          <div className="my-3 ">
            <p className="text-sm lg:mt-3 xl:mt-0">
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
          <div className="flex justify-center md:justify-start">
            <button className="text-white bg-purple-600 text-lg px-8 rounded-full py-2 my-2 md:my-5">
              See detail
            </button>
          </div>
        </div>
        <div className="w-[100%] ">
          <img
            src={pic2}
            className="w-[100%] h-[100%] rounded-3xl object-cover md:-rotate-2 img-glow"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePackage;
