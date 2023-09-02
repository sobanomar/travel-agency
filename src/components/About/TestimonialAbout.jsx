import React from "react";

import testmonialBack from "../../assets/testimonial-back.jpg";
import testmonialPortrait from "../../assets/testimonial-portrait.jpg";
import testimonialArrow from "../../assets/testimonial-arrow.png";
import StarIcon from "@mui/icons-material/Star";

const TestimonialAbout = () => {
  return (
    <div className="flex mx-20 mt-80 mb-20">
      <div className="w-[50%] flex flex-col gap-7 justify-end">
        <div className="flex flex-col gap-5 w-[90%]">
          <h1>Testimonials</h1>
          <h1 className="text-7xl">What do they say about us?</h1>
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
      <div className="w-[50%] relative">
        <img
          src={testimonialArrow}
          className="absolute w-[30rem] right-[42rem] bottom-[35rem] "
          alt=""
        />
        <img
          src={testmonialPortrait}
          className="absolute z-10 w-[22rem] h-[25rem] -top-32 rounded-lg -rotate-3 object-cover object-left  shadow-[0px_0px_30px_0px] shadow-purple-600"
          alt=""
        />
        <img
          src={testmonialBack}
          className="w-[32rem] h-[45rem] object-cover rounded-lg rotate-3 ml-40 shadow-[0px_0px_30px_0px] shadow-purple-600"
          alt=""
        />
      </div>
    </div>
  );
};

export default TestimonialAbout;
