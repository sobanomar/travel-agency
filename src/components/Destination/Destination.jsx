import React, { useEffect, useState } from "react";
import RecommendedDestinations from "./RecommendedDestinations";
import Hero from "../Common/Hero";
import Testimonial from "../Common/Testimonial";
import PopularDestinations from "./PopularDestinations";
import destinationBgImg from "../../assets/img/destinations_hero.webp";
import useData from "../../CustomHooks/useData";

const Destination = () => {
  const [destinationsData, setDestinationsData] = useState(null);

  const { data, isLoading, error } = useData("destination/list/");
  useEffect(() => {
    if (data) {
      setDestinationsData(data);
    }
  }, [data]);

  let textHero =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro fugiat distinctio incidunt accusantium sunt id nemo odio maiores eius odit!";
  return (
    <>
      <Hero
        heading="Destinations"
        textHero={textHero}
        bgImg={destinationBgImg}
      />
      <PopularDestinations destinations={destinationsData?.results} />
      <RecommendedDestinations />
      <Testimonial />
    </>
  );
};

export default Destination;
