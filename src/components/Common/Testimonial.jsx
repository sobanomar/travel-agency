import React from "react";

import testimonialBack from "../../assets/img/testimonial-back.jpg";
import testimonialPortrait from "../../assets/img/testimonial-portrait.jpg";
import testimonialArrow from "../../assets/img/testimonial-arrow.png";

import StarIcon from "@mui/icons-material/Star";

const Testimonial = () => {
  return (
    <div className="flex flex-col md:flex-row mx-5 md:mx-10 lg:mx-20 md:mt-52 md:mb-20">
      <div className="w-[100%] md:w-[60%] flex flex-col gap-7 justify-center">
        <div className="flex flex-col gap-2 md:gap-5 w-[100%] md:w-[90%]">
          <h1 className="text-purple-500 font-semibold text-center md:text-left">
            Testimonials
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl p-2 text-center md:text-left">
            What do they say about us?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptatum, repellendus voluptatibus nihil laudantium in aspernatur
            obcaecati magni possimus nostrum excepturi adipisci distinctio!
            Beatae reiciendis quo quam, autem totam, non, saepe dolor cum
            asperiores repudiandae aspernatur dolorem! Cupiditate, modi delectus
            ipsa, itaque quidem enim soluta quo, minima facilis praesentium
            dicta.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id quae
            dicta totam suscipit ratione pariatur neque voluptatum vitae
            corrupti quod iste qui, dolores quis voluptas ad, earum facere
            reprehenderit. Perferendis explicabo, ea sapiente rem, animi quod
            vitae nostrum aut vel possimus deleniti. Cumque quia non expedita
            praesentium, debitis nam.
          </p>
        </div>
        <div className="flex">
          <div style={{ color: "orange" }} className="flex gap-1 mt-0.5 mr-4">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <h3 className="font-bold text-xl">5/5</h3>
        </div>
      </div>
      <div className="w-[100%] md:w-[40%] relative">
        <img
          src={testimonialArrow}
          className="absolute w-[80%] right-[90%] bottom-[90%] hidden md:block"
          alt=""
        />
        <img
          src={testimonialPortrait}
          className="my-10 md:absolute z-10 w-[100%] md:w-[60%] h-[45%] -top-24 -left-16 rounded-lg md:-rotate-3 object-cover object-left img-glow"
          alt=""
        />
        <img
          src={testimonialBack}
          className="hidden md:block w-[100%] h-[90%] object-cover rounded-lg md:rotate-3 img-glow"
          alt=""
        />
      </div>
    </div>
  );
};

export default Testimonial;
