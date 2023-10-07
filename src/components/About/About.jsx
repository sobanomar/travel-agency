import React, { useEffect, useState } from "react";
import AboutWelcome from "./AboutWelcome";
import AboutVisionMission from "./AboutVisionMission";
import AboutUs from "./AboutUs";
import SuccessStory from "./SuccessStory";
import Hero from "../Common/Hero";
import Testimonial from "../Common/Testimonial";
import BestPackage from "../Common/BestPackage";
import aboutBgImg from "../../assets/img/about_hero.webp";
import useData from "../../CustomHooks/useData";

const About = () => {
  const [founderMessage, setFounderMessage] = useState(null);

  const { data, isLoading, error } = useData("aboutus/founder/message/");
  useEffect(() => {
    if (data) {
      setFounderMessage(data.results);
    }
  }, [data]);
  let textHero =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro fugiat distinctio incidunt accusantium sunt id nemo odio maiores eius odit!";

  return (
    <>
      <Hero heading="About Us" textHero={textHero} bgImg={aboutBgImg} />
      <AboutUs />
      <AboutVisionMission />
      <AboutWelcome founder={founderMessage} />
      <BestPackage />
      <SuccessStory />
      <Testimonial />
    </>
  );
};

export default About;
