import React from "react";
import AboutWelcome from "./AboutWelcome";
import AboutBestPackage from "./AboutBestPackage";
import AboutVisionMission from "./AboutVisionMission";
import AboutUs from "./AboutUs";
import SuccessStory from "./SuccessStory";
import Hero from "../Common/Hero";
import Testimonial from "../Common/Testimonial";

const About = () => {
  let textHero =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro fugiat distinctio incidunt accusantium sunt id nemo odio maiores eius odit!";
  return (
    <>
      <Hero heading="About Us" textHero={textHero} />
      <AboutUs />
      <AboutVisionMission />
      <AboutWelcome />
      <AboutBestPackage />
      <SuccessStory />
      <Testimonial />
    </>
  );
};

export default About;
