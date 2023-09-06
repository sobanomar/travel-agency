import React from "react";
import successAbout from "../../assets/success-story-img-about.jpg";
import arrowLeft from "../../assets/success-left-arrow.png";
import arrowRight from "../../assets/success-right-arrow.png";

const SuccessStory = () => {
  return (
    <div className="mx-4 md:mx-20 my-8 md:my-40">
      <div className="text-3xl md:text-5xl font-semibold mb-8">
        Success Story
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-3xl md:text-5xl w-full md:w-[40%] mb-4 md:mb-0">
          Success Stories from Visiting My Friend Travels
        </h1>
        <p className="text-sm md:text-base w-full md:w-[40%] md:ml-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
          illo deleniti officiis consequuntur officia cupiditate temporibus
          velit. Voluptatibus at possimus officia atque doloremque rerum omnis
          quae molestias deserunt, minus qui.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between my-8 md:my-20">
        <div className="w-full md:w-[33.3%] flex flex-col items-center md:items-start gap-4">
          <div className="text-3xl md:text-5xl">
            <h1>2023</h1>
            <h1>Became a Big Travel Agency</h1>
          </div>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            accusantium voluptatem doloremque necessitatibus earum tempora
            provident laboriosam reiciendis nostrum in.
          </p>
        </div>
        <div className="w-full md:w-[33.3%] relative">
          <img
            src={arrowLeft}
            className="absolute right-0 md:right-[27rem] w-[50%] md:w-[70%] top-0"
            alt=""
          />
          <img
            src={arrowRight}
            className="absolute left-0 md:left-80 -top-10 w-[50%] md:w-[70%]"
            alt=""
          />
          <img
            className="rounded-lg w-full h-[20rem] md:h-[100%] object-cover md:rotate-2 shadow-[0px_0px_30px_0px] shadow-purple-600"
            src={successAbout}
            alt=""
          />
        </div>
        <div className="w-full md:w-[33.3%] flex flex-col items-center md:items-start gap-4">
          <div className="text-3xl md:text-5xl">
            <h1>2020</h1>
            <h1>Best Services Travel Agency</h1>
          </div>
          <p className="text-sm md:text-base">
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
