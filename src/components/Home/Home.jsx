import React from "react";
import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";
import HomeWhyChooseUs from "./HomeWhyChooseUs";
import HomePopularDestinations from "./HomePopularDestinations";
import HomePackage from "./HomePackage";
import HomeGallery from "./HomeGallery";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeWhyChooseUs />
      <HomePopularDestinations />
      <HomePackage />
      <HomeGallery />
    </>
  );
};

export default Home;
