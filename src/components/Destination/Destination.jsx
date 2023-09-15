import React, { useEffect, useState } from "react";
import RecommendedDestinations from "./RecommendedDestinations";
import Hero from "../Common/Hero";
import BestPackage from "../Common/BestPackage";
import Testimonial from "../Common/Testimonial";
import PopularDestinations from "./PopularDestinations";

const Destination = () => {
  const [destinationsData, setDestinationsData] = useState(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "http://35.173.181.194:8000/destination/list/"
      );
      const data = await response.json();
      setDestinationsData(data);
    }
    getData();
  }, []);

  let textHero =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro fugiat distinctio incidunt accusantium sunt id nemo odio maiores eius odit!";
  return (
    <>
      <Hero heading="Destinations" textHero={textHero} />
      <PopularDestinations destinations={destinationsData?.results} />
      <RecommendedDestinations />
      <Testimonial />
    </>
  );
};

export default Destination;
