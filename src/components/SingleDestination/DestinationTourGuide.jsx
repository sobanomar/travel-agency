import React from "react";

const DestinationTourGuides = () => {
  return (
    <div className="mx-5 my-20 md:mx-10 lg:mx-20">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        Tour Guide Escorting You
      </h1>
      <div className="flex justify-center ">
        <h1 className="text-lg md:text-center my-4 md:w-[58%]  xl:w-[48%]  md:my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis est
          doloremque asperiores, qui cupiditate vel optio, deserunt minus,
          aperiam illum culpa sint dicta? Asperiores aliquam laboriosam nam
          itaque quae cupiditate.
        </h1>
      </div>
      <div className="flex flex-col justify-between my-5 gap-10 md:flex-row">
        <div className="w-full h-[21rem] relative md:-rotate-2 md:h-[22rem] lg:h-[28rem] xl:h-[35rem]">
          <img
            className="h-full w-full img-glow object-cover rounded-3xl"
            src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1923&q=80"
          />
          <div className="bg-neutral-800/75 w-full h-full rounded-3xl absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Junaid hajweri</h1>
            <h1 className="text-sm mt-4">Senior Tour Guide</h1>
          </div>
        </div>
        <div className="w-full h-[21rem] relative md:rotate-2 md:h-[22rem]  lg:h-[28rem] xl:h-[35rem]">
          <img
            className="h-full w-full img-glow object-cover rounded-3xl"
            src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80"
          />
          <div className="bg-neutral-800/75 w-full h-full rounded-3xl absolute top-0 left-0 text-white opacity-0 hover:opacity-100 transition-all flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Junaid hajweri</h1>
            <h1 className="text-sm mt-4">Senior Tour Guide</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationTourGuides;
