import React from "react";
import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";
import HomeWhyChooseUs from "./HomeWhyChooseUs";
import HomePopularDestinations from "./HomePopularDestinations";
import HomePackage from "./HomePackage";
import HomeGallery from "./HomeGallery";
import Testimonial from "../Common/Testimonial";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeWhyChooseUs />
      <HomePopularDestinations />
      <HomePackage />
      <HomeGallery />
      <Testimonial />
    </>
  );
};

export default Home;
