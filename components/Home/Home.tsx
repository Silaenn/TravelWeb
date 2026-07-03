"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";
import Tours from "./Tours/Tours";
import WhyChoose from "./WhyChoose/WhyChoose";
import Reviews from "./Reviews/Reviews";
import News from "./News/News";
import Newsletter from "./Newsletter/Newsletter";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 60,
      });
    };
    initAOS();
  }, []);

  return (
    <main>
      <Hero />
      <WhyChoose />
      <Destination />
      <Hotel />
      <Tours />
      <Reviews />
      <News />
      <Newsletter />
    </main>
  );
};

export default Home;
