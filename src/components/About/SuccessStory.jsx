import React from "react";

import successAbout from "../../assets/img/success-story-img-about.webp";
import arrowLeft from "../../assets/img/success-left-arrow.png";
import arrowRight from "../../assets/img/success-right-arrow.png";

const SuccessStory = () => {
  return (
    <div className="mx-5 md:mx-10 lg:mx-20 my-10">
      <div className="text-purple-500 font-semibold text-center md:text-left">
        Success Story
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <h1 className="text-3xl md:text-4xl lg:text-5xl my-4 md:my-0 md:w-[50%] text-center md:text-left">
          Success Stories from Visting My Friend Travels
        </h1>
        <p className="md:w-[50%] lg:w-[40%] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
          illo deleniti officiis consequuntur officia cupiditate temporibus
          velit. Voluptatibus at possimus officia atque doloremque rerum omnis
          quae molestias deserunt, minus qui.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0 lg:my-20 md:my-10">
        <div className="md:w-[33.3%] flex justify-center md:gap-10 flex-col">
          <div className="text-3xl text-center md:text-left my-4 md:text-3xl lg:text-5xl">
            <h1>2023</h1>
            <h1>Become Big Travel Agency</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            accusantium voluptatem doloremque necessitatibus earum tempora
            provident laboriosam reiciendis nostrum in.
          </p>
        </div>
        <div className="md:w-[33.3%] relative md:left-4">
          <img
            src={arrowLeft}
            className="absolute md:right-[80%] lg:right-[90%] w-[70%] hidden lg:block"
            alt=""
          />
          <img
            src={arrowRight}
            className="absolute left-[80%] -top-[7%] w-[70%] hidden lg:block"
            alt=""
          />
          <img
            className="rounded-lg md:w-[85%] w-[100%] h-[25rem] md:h-[100%] object-cover md:rotate-2 img-glow"
            src={successAbout}
            alt=""
          />
        </div>
        <div className="md:w-[33.3%] flex justify-center md:gap-10 flex-col">
          <div className="text-3xl text-center md:text-left my-4 md:text-3xl lg:text-5xl">
            <h1>2020</h1>
            <h1>Best Services Travel Agency</h1>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            repellendus voluptatem iure temporibus fugit architecto alias
            mollitia eveniet dolorum tempore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
