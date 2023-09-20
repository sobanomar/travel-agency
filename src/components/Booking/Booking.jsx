import React, { useEffect, useState } from "react";
import Hero from "../Common/Hero.jsx";
import BestPackage from "../Common/BestPackage.jsx";
import bookingHeroBg from "../../assets/img/booking-bg-img.jpg";
import BookingForm from "./BookingForm.jsx";
import Testimonial from "../Common/Testimonial.jsx";

const Booking = () => {
  const [destinationsData, setDestinationsData] = useState(null);
  const [packagesData, setPackagesData] = useState(null);

  useEffect(() => {
    async function getData() {
      const destinationsResponse = await fetch(
        "http://35.173.181.194:8000/booking/destinations/"
      );
      const packagesResponse = await fetch(
        "http://35.173.181.194:8000//booking/package/options/"
      );

      const destinationsData = await destinationsResponse.json();
      const packagesData = await packagesResponse.json();

      setDestinationsData(destinationsData);
      setPackagesData(packagesData);
    }
    getData();
  }, []);

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
