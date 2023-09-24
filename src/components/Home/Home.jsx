import React, { useEffect, useState } from "react";
import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";
import HomeWhyChooseUs from "./HomeWhyChooseUs";
import HomePopularDestinations from "./HomePopularDestinations";
import HomePackage from "./HomePackage";
import HomeGallery from "./HomeGallery";
import Testimonial from "../Common/Testimonial";
import BestPackage from "../Common/BestPackage";
import useData from "../../CustomHooks/useData";

const Home = () => {
  const [homeData, setHomeData] = useState(null);

  const { data, isLoading, error } = useData("home/");
  useEffect(() => {
    if (data) {
      setHomeData(data);
    }
  }, [data]);
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomePopularDestinations destinations={homeData?.destination} />
      <HomePackage destinations={homeData?.destination} />
      <HomeWhyChooseUs />
      <HomeGallery />
      <BestPackage />
      <Testimonial />
    </>
  );
};

export default Home;
