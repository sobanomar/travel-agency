import React from "react";

import successAbout from "../../assets/success-story-img-about.jpg";
import arrowLeft from "../../assets/success-left-arrow.png";
import arrowRight from "../../assets/success-right-arrow.png";

const SuccessStory = () => {
  return (
    <div className="mx-20 my-40">
      <div>Success Story</div>
      <div className="flex justify-between">
        <h1 className="text-5xl w-[40%]">
          Success Stories from Visting My Friend Travels
        </h1>
        <p className="w-[40%] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
          illo deleniti officiis consequuntur officia cupiditate temporibus
          velit. Voluptatibus at possimus officia atque doloremque rerum omnis
          quae molestias deserunt, minus qui.
        </p>
      </div>
      <div className="flex justify-between my-20">
        <div className="w-[33.3%] flex justify-center gap-10 flex-col">
          <div className="text-5xl ">
            <h1>2023</h1>
            <h1>Become Big Travel Agency</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            accusantium voluptatem doloremque necessitatibus earum tempora
            provident laboriosam reiciendis nostrum in.
          </p>
        </div>
        <div className="w-[33.3%] relative">
          <img
            src={arrowLeft}
            className="absolute right-[27rem] w-[70%]"
            alt=""
          />
          <img
            src={arrowRight}
            className="absolute left-80 -top-10 w-[70%]"
            alt=""
          />
          <img
            className="rounded-lg w-[85%] h-[100%] object-cover rotate-2 shadow-[0px_0px_30px_0px] shadow-purple-600"
            src={successAbout}
            alt=""
          />
        </div>
        <div className="w-[33.3%] flex justify-center gap-10 flex-col">
          <div className="text-5xl">
            <h1>2020 </h1>
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
