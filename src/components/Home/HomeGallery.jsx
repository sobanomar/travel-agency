import React, { useEffect, useState } from "react";
import CustomButton from "../Common/CustomButton";
import useData from "../../CustomHooks/useData";

const GallerySection = () => {
  const [Images, setImages] = useState(null);

  const { data, isLoading, error } = useData("gallery/");
  useEffect(() => {
    if (data) {
      setImages(data?.results);
    }
  }, [data]);

  return (
    <div className="flex flex-col-reverse md:flex-row mx-5 md:mx-20 lg:mx-20 my-10 sm:my-20 md:h-screen">
      {Images && (
        <>
          <button className="text-white bg-purple-600 text-lg px-8 rounded-full py-2 my-8 md:hidden">
            See More
          </button>
          <div className="flex flex-col md:flex-row gap-8 md:w-[60%]">
            <div className="flex flex-col gap-8 w-full md:w-1/2">
              <div className="relative w-full md:h-[35%] h-full">
                <img
                  className="object-cover h-full w-full rounded-lg img-glow"
                  src={Images[0].image}
                  alt={Images[0].title}
                />
                <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center rounded-lg">
                  <h1 className="text-lg">{Images[0].title}</h1>
                </div>
              </div>
              <div className="relative w-full md:h-[65%] h-full">
                <img
                  className="object-cover h-full w-full rounded-lg img-glow"
                  src={Images[1].image}
                  alt={Images[1].title}
                />
                <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center rounded-lg">
                  <h1 className="text-lg">{Images[1].title}</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse gap-8 w-full md:w-1/2">
              <div className="relative w-full md:h-[35%] h-full">
                <img
                  className="object-cover h-full w-full rounded-lg img-glow"
                  src={Images[2].image}
                  alt={Images[2].title}
                />
                <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center rounded-lg">
                  <h1 className="text-lg">{Images[2].title}</h1>
                </div>
              </div>
              <div className="relative w-full md:h-[65%] h-full">
                <img
                  className="object-cover h-full w-full rounded-lg img-glow"
                  src={Images[3].image}
                  alt={Images[3].title}
                />
                <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center rounded-lg">
                  <h1 className="text-lg">{Images[3].title}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center md:w-[40%] md:px-5 lg:px-7 xl:px-10 items-center md:items-start">
            <h1 className="text-lg text-purple-600 font-semibold">Gallery</h1>
            <h1 className="text-2xl text-center md:text-left xl:text-5xl my-2 lg:my-4">
              Moments Captured By Connoisseurs Of Beauty
            </h1>
            <div className="my-4">
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                voluptatum, sed in facere quam fugit, saepe nesciunt dolorum
                alias qui, animi magni veniam? Animi sequi reprehenderit Lorem
                ipsum dolor sit amet.
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                voluptatum, sed in facere quam fugit, saepe nesciunt dolorum
                alias qui, animi magni veniam? Animi sequi reprehenderit Lorem
                ipsum dolor sit amet.
              </p>
            </div>
            <CustomButton label={"See More"} redirectTo={`/gallery`} />
          </div>
        </>
      )}
    </div>
  );
};

export default GallerySection;
