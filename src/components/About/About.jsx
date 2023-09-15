import React, { useEffect, useState } from "react";
import AboutWelcome from "./AboutWelcome";
import AboutVisionMission from "./AboutVisionMission";
import AboutUs from "./AboutUs";
import SuccessStory from "./SuccessStory";
import Hero from "../Common/Hero";
import Testimonial from "../Common/Testimonial";
import BestPackage from "../Common/BestPackage";
import aboutBgImg from "../../assets/img/about_hero.jpg";

const About = () => {
  const [founderMessage, setFounderMessage] = useState(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "http://35.173.181.194:8000/aboutus/founder/message/"
      );
      const founderMessage = await response.json();
      setFounderMessage(founderMessage?.results);
    }
    getData();
  }, []);
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
