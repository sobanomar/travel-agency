import React from "react";
import welcomeImage from "../../assets/welcome-image.jpg";
import welcomeArrow from "../../assets/welcome-arrow.png";

const AboutWelcome = () => {
  return (
    <>
      <div className="mt-8 md:mt-52 mb-8 md:mb-40 mx-4 md:mx-20 relative">
        <div className="absolute left-0 md:left-[40rem] top-1">
          <img src={welcomeArrow} alt="" className="w-32 md:w-64" />
        </div>
        <div className="w-full md:w-96 ml-4 md:ml-80">
          <h3 className="text-purple-500 font-semibold">Welcome</h3>
          <h1 className="text-3xl md:text-5xl">
            Hello Traveler, Welcome To Our Travel Agency
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center my-4 md:m-20">
          <div className="w-[20rem] md:w-[30rem] -rotate-6 md:rotate-0">
            <img
              src={welcomeImage}
              className="w-full h-[25rem] md:h-[33rem] object-cover rounded-2xl shadow-[0px_0px_30px_0px] shadow-purple-600"
              alt="img here"
            />
          </div>
          <div className="w-full md:w-[30rem] md:flex md:flex-col md:justify-center ml-4 md:ml-8">
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
            <h1 className="font-semibold text-xl my-4 text-purple-500">
              Founder Name
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutWelcome;
