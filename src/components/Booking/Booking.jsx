import React from "react";
import Hero from "../Common/Hero.jsx";
import BestPackage from "../Common/BestPackage.jsx";
import bookingHeroBg from "../../assets/img/booking-bg-img.jpg";
import BookingForm from "./BookingForm.jsx";
import Testimonial from "../Common/Testimonial.jsx";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { bookingId } = useParams();

  const textHero =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, velit";
  return (
    <>
      <Hero heading="Booking" textHero={textHero} bgImg={bookingHeroBg} />
      <BookingForm />
      <BestPackage />
      <Testimonial />
    </>
  );
};

export default Booking;
