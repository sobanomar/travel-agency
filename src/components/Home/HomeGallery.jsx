import React from "react";
import pic1 from "../../assets/home-gallery-1.jpg";
import pic2 from "../../assets/home-gallery-2.jpg";
import pic3 from "../../assets/home-gallery-3.jpg";
import pic4 from "../../assets/home-gallery-4.jpg";
const HomeGallery = () => {
  return (
    <div className="mx-20">
      <div className="flex gap-32 mt-10 ">
        {/* image section */}
        <div className="flex flex-col w-[100%] h-[100%] ">
          <div className="flex flex-col w-[100%]">
            <div className="flex gap-5 mt-20 w-full h-full justify-between">
              {/* first two image */}
              <div className="w-[100%]   ">
                <img
                  src={pic1}
                  className="rounded-3xl w-[100%] h-[80%] object-cover "
                />
              </div>
              <div className="w-[100%] ">
                <img
                  src={pic2}
                  className="rounded-3xl w-[100%] h-[80%] object-cover "
                />
              </div>
            </div>
            <div className="flex gap-5 -mt-20 w-full h-full justify-between">
              {/* first two image */}
              <div className="w-[100%]   ">
                <img
                  src={pic2}
                  className="rounded-3xl w-[100%] h-[80%] object-cover "
                />
              </div>
              <div className="w-[100%] ">
                <img
                  src={pic1}
                  className="rounded-3xl w-[100%] h-[80%] object-cover "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-96 w-[50%] ">
          <h1 className="text-lg">Gallery</h1>
          <h1 className="text-5xl leading-[56px] mt-7">
            Moments Captured By Connoisseurs Of Beauty
          </h1>
          <p className="text-sm mt-16">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            voluptatum, sed in facere quam fugit, saepe nesciunt dolorum alias
            qui, animi magni veniam? Animi sequi reprehenderit Lorem ipsum dolor
            sit amet.
          </p>
          <p className="text-sm mt-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            voluptatum, sed in facere quam fugit, saepe nesciunt dolorum alias
            qui, animi magni veniam? Animi sequi reprehenderit Lorem ipsum dolor
            sit amet.
          </p>
          <button className="text-white bg-green-600 text-lg px-8 rounded-full py-2 mt-14 w-[50%]">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
