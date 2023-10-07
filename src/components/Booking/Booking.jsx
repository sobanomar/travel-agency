import React, { useEffect, useState } from "react";
import Hero from "../Common/Hero.jsx";
import BestPackage from "../Common/BestPackage.jsx";
import bookingHeroBg from "../../assets/img/booking-bg-img.webp";
import BookingForm from "./BookingForm.jsx";
import Testimonial from "../Common/Testimonial.jsx";
import useData from "../../CustomHooks/useData.js";

const Booking = () => {
  const [destinationsData, setDestinationsData] = useState(null);
  const [packagesData, setPackagesData] = useState(null);

  const { data: destData } = useData("booking/destinations/");
  const { data: pkgsData } = useData("booking/package/options/");

  useEffect(() => {
    if (destData) {
      setDestinationsData(destData);
    }
  }, [destData]);
  useEffect(() => {
    if (pkgsData) {
      setPackagesData(pkgsData);
    }
  }, [pkgsData]);

  const textHero =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, velit";
  return (
    <>
      <Hero heading="Booking" textHero={textHero} bgImg={bookingHeroBg} />
      <BookingForm
        destinations={destinationsData?.results}
        packages={packagesData?.results}
      />
      <BestPackage />
      <Testimonial />
    </>
  );
};

export default Booking;
