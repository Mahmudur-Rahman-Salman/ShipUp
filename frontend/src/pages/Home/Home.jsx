import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ComboSection from "../../components/ComboSection/ComboSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <HeroSection></HeroSection>
      <ComboSection></ComboSection>
    </div>
  );
};

export default Home;
