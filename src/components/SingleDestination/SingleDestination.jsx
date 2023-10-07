import React, { useEffect, useState } from "react";
import Hero from "../Common/Hero";
import DestinationDetails from "./DestinationDetails";
import DestinationMap from "./DestinationMap";
import DestinationTourGuides from "./DestinationTourGuide";
import { useParams } from "react-router-dom";
import BestPackage from "../Common/BestPackage";
import Testimonial from "../Common/Testimonial";
import singleDestinationBgImg from "../../assets/img/single_destination_hero.webp";
import useData from "../../CustomHooks/useData";

const SingleDestination = () => {
  const [destinationDetail, setDestinationDetail] = useState(null);

  const { desId } = useParams();

  const { data, isLoading, error } = useData(`destination/${desId}/`);
  useEffect(() => {
    if (data) {
      setDestinationDetail(data);
    }
  }, [data]);

  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore amet vitae aliquid maiores non aliquam deserunt consequuntur esse rerum!";
  return (
    <>
      <Hero
        heading={"Single Destination"}
        textHero={description}
        bgImg={singleDestinationBgImg}
      />
      <DestinationDetails destination={destinationDetail} />
      <DestinationMap />
      <DestinationTourGuides />
      <BestPackage />
      <Testimonial />
    </>
  );
};

export default SingleDestination;
