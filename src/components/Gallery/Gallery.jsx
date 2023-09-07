import React from "react";
import GallerySection from "./GallerySection";
import Testimonial from "../Common/Testimonial";
import BestPackage from "../Common/BestPackage";
import Hero from "../Common/Hero";

const Gallery = () => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore amet vitae aliquid maiores non aliquam deserunt consequuntur esse rerum!";
  return (
    <>
      <Hero heading={"Gallery"} textHero={description} />
      <GallerySection />
      <BestPackage />
      <Testimonial />
    </>
  );
};

export default Gallery;
