import React from "react";
import RecommendedDestinations from "./RecommendedDestinations";
import Hero from "../Common/Hero";
import BestPackage from "../Common/BestPackage";
import Testimonial from "../Common/Testimonial";
import PopularDestinations from "./PopularDestinations";

const Destination = () => {
  let textHero =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro fugiat distinctio incidunt accusantium sunt id nemo odio maiores eius odit!";
  return (
    <>
      <Hero heading="Destinations" textHero={textHero} />
      <PopularDestinations />
      <RecommendedDestinations />
      <BestPackage />
      <Testimonial />
    </>
  );
};

export default Destination;
