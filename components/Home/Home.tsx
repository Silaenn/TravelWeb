import React from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";

const Home = () => {
  return (
    <div className="overflow-hidden h-[10000px]">
      <Hero />
      <Destination />
      <Hotel />
    </div>
  );
};

export default Home;
