import React, { useEffect, useState } from "react";
import Hero from "../Common/Hero";
import DestinationDetails from "./DestinationDetails";
import DestinationMap from "./DestinationMap";
import DestinationTourGuides from "./DestinationTourGuide";
import { useParams } from "react-router-dom";
import BestPackage from "../Common/BestPackage";
import Testimonial from "../Common/Testimonial";

const SingleDestination = () => {
  const [destinationDetail, setDestinationDetail] = useState(null);

  const { desId } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://35.173.181.194:8000/destination/${desId}/`
      );
      const data = await response.json();
      setDestinationDetail(data);
    }
    getData();
  }, []);

  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore amet vitae aliquid maiores non aliquam deserunt consequuntur esse rerum!";
  return (
    <>
      <Hero heading={"Single Destination"} textHero={description} />
      <DestinationDetails destination={destinationDetail} />
      <DestinationMap />
      <DestinationTourGuides />
      <BestPackage />
      <Testimonial />
    </>
  );
};

export default SingleDestination;
