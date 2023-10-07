import React, { useEffect, useState } from "react";

import testimonialBack from "../../assets/img/testimonial-back.webp";
import testimonialArrow from "../../assets/img/testimonial-arrow.png";

import { Rating } from "@mui/material";
import useData from "../../CustomHooks/useData";

const Testimonial = () => {
  const [feedback, setFeedback] = useState(null);

  const { data, isLoading, error } = useData("users/feedback/");
  useEffect(() => {
    if (data) {
      setFeedback(data.results);
    }
  }, [data]);

  return (
    feedback && (
      <div className="flex flex-col mt-5 md:flex-row mx-5 md:mx-10 lg:mx-20 md:my-10 md:mt-32 lg:mt-52">
        <div className="w-[100%] md:w-[60%] flex flex-col gap-7 justify-center">
          <div className="flex flex-col gap-2 md:gap-5 w-[100%] md:w-[90%]">
            <h1 className="text-purple-500 font-semibold text-center md:text-left">
              Testimonials
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl p-2 text-center md:text-left">
              What do they say about us?
            </h1>
            <p>{feedback[0]?.description}</p>
            <p>{feedback[1]?.description}</p>
          </div>
          <div className="flex">
            <div style={{ color: "orange" }} className="flex gap-1 mt-0.5 mr-4">
              <Rating
                name="read-only"
                value={Number(feedback[0]?.rating)}
                precision={0.1}
                readOnly
              />
            </div>
            <h3 className="font-bold text-xl">{feedback[0]?.rating}</h3>
          </div>
        </div>
        <div className="w-[100%] md:w-[40%] relative">
          <img
            src={testimonialArrow}
            className="absolute w-[80%] right-[90%] bottom-[87%] lg:bottom-[85%] hidden md:block"
            alt=""
          />
          <img
            src={feedback[0]?.image}
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
    )
  );
};

export default Testimonial;
