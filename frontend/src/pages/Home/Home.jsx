import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ComboSection from "../../components/ComboSection/ComboSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <HeroSection></HeroSection>
      <ComboSection></ComboSection>
      <ServiceSection></ServiceSection>
    </div>
  );
};

export default Home;
