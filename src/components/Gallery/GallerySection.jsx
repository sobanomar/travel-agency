import React, { useEffect, useState } from "react";
import useData from "../../CustomHooks/useData";

const GallerySection = () => {
  const [Images, setImages] = useState(null);

  const { data, isLoading, error } = useData("gallery/");
  useEffect(() => {
    if (data) {
      setImages(data.results);
    }
  }, [data]);

  return (
    <div className="mx-5 md:mx-10 lg:mx-20 pt-8 lg:pt-24">
      <h1 className="text-center text-lg md:text-lg font-semibold text-purple-600 lg:text-left my-2">
        Gallery
      </h1>
      <div className="flex flex-col gap-2 md:gap-10 justify-between lg:flex-row lg:gap-20 w-[100%] md:mt-10">
        <h1 className="text-xl sm:text-3xl text-center md:text-4xl lg:text-left  lg:text-5xl">
          Moments Captured By Connoisseurs Of Beauty
        </h1>
        <p className="text-sm text-left w-[100%] mt-2 lg:w-[60%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, at
          iusto doloremque est laborum officia ad quidem voluptatum voluptates
          quasi placeat consequuntur rem commodi repellendus, quod repellat, ex
          sint id.
        </p>
      </div>

      {Images && (
        <div className="flex flex-col lg:flex-row gap-5 w-full my-5 md:my-10 lg:my-20">
          <div className="flex flex-col space-y-4 w-full lg:w-1/3">
            <div className="relative w-full lg:h-[35%] h-full">
              <img
                className="object-cover h-full w-full"
                src={Images[0].image}
                alt={Images[0].title}
              />
              <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center">
                <h1 className="text-lg">{Images[0].title}</h1>
              </div>
            </div>
            <div className="relative w-full lg:h-[65%] h-full">
              <img
                className="object-cover h-full w-full"
                src={Images[1].image}
                alt={Images[1].title}
              />
              <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center">
                <h1 className="text-lg">{Images[1].title}</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-5 w-full lg:w-1/3">
            <div className="relative w-full lg:h-[35%] h-full">
              <img
                className="object-cover h-full w-full"
                src={Images[2].image}
                alt={Images[2].title}
              />
              <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center">
                <h1 className="text-lg">{Images[2].title}</h1>
              </div>
            </div>
            <div className="relative w-full lg:h-[65%] h-full">
              <img
                className="object-cover h-full w-full"
                src={Images[3].image}
                alt={Images[3].title}
              />
              <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center">
                <h1 className="text-lg">{Images[3].title}</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 w-full lg:w-1/3">
            <div className="relative w-full h-[33%] lg:h-full">
              <img
                className="object-cover h-full w-full"
                src={Images[4].image}
                alt={Images[4].title}
              />
              <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center">
                <h1 className="text-lg">{Images[4].title}</h1>
              </div>
            </div>
            <div className="relative h-[33%] md:h-full">
              <img
                className="object-cover h-full w-full"
                src={Images[5].image}
                alt={Images[5].title}
              />
              <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center">
                <h1 className="text-lg">{Images[5].title}</h1>
              </div>
            </div>
            <div className="relative h-[33%] md:h-full">
              <img
                className="object-cover h-full w-full"
                src={Images[6].image}
                alt={Images[6].title}
              />
              <div className="bg-neutral-800/75 w-full h-full absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex justify-center items-center">
                <h1 className="text-lg">{Images[6].title}</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
