import React from "react";
import welcomeImage from "../../assets/welcome-image.jpg";
import welcomeArrow from "../../assets/welcome-arrow.png";

const Welcome = () => {
  return (
    <>
      <div className="my-40 mx-20 relative">
        <div className="absolute left-[40rem] top-1">
          <img src={welcomeArrow} alt="" className="w-64" />
        </div>
        <div className="w-96 ml-80">
          <h3 className="text-green-500">Welcome</h3>
          <h1 className="text-5xl">
            Hello Traveller Welcome To Our Travel Agency
          </h1>
        </div>
        <div className="flex justify-center m-20">
          <div className="w-[30rem] -rotate-6 ">
            <img
              src={welcomeImage}
              className="w-[25rem] h-[33rem] object-cover rounded-2xl"
              alt="img here"
            />
          </div>
          <div className="w-[30rem] flex flex-col justify-center">
            <p className="my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              dolor praesentium dicta rerum dignissimos eos, minus neque libero
              similique commodi facere aliquam magnam nihil temporibus
              blanditiis vero saepe. Nesciunt labore odit itaque maxime
              veritatis assumenda porro dolore at error, amet consectetur quidem
              explicabo quas impedit vitae alias ad sint possimus!
            </p>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              maxime eligendi cupiditate fuga sit voluptas. Vel tenetur
              molestiae saepe, sapiente neque totam quaerat veritatis ipsum
              impedit distinctio quibusdam in, ex deleniti asperiores minima
              ratione officiis molestias recusandae voluptas perspiciatis illum
              adipisci provident maxime dolores! Velit excepturi quo rem qui
              iure?
            </p>
            <h1 className="font-semibold text-xl my-4 text-green-500">
              Founder Name
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
