import React, { useEffect, useState } from "react";
import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";
import HomeWhyChooseUs from "./HomeWhyChooseUs";
import HomePopularDestinations from "./HomePopularDestinations";
import HomePackage from "./HomePackage";
import HomeGallery from "./HomeGallery";
import Testimonial from "../Common/Testimonial";
import BestPackage from "../Common/BestPackage";

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://35.173.181.194:8000/home/");
      const data = await response.json();
      setHomeData(data);
    }
    getData();
  }, []);
  // console.log(homeData?.destination);
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
