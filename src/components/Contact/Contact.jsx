import React from "react";
import Hero from "../Common/Hero";
import ContactForm from "./ContactForm";
import Info from "./Info";
import contactBgImg from "../../assets/img/contact_hero.webp";

const Contact = () => {
  let textHero =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro fugiat distinctio incidunt accusantium sunt id nemo odio maiores eius odit!";
  return (
    <>
      <Hero heading="Contact Us" textHero={textHero} bgImg={contactBgImg} />
      <ContactForm />
      <Info />
    </>
  );
};

export default Contact;
