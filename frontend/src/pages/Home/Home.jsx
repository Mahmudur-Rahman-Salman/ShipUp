import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ComboSection from "../../components/ComboSection/ComboSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import HowItWorkSection from '../../components/HowItWorksSection/HowItWorkSection';
import PricingSection from "../../components/PricingSection/PricingSection";
import CtaSection from "../../components/CtaSection/CtaSection";


const Home = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <HeroSection></HeroSection>
      <ComboSection></ComboSection>
      <ServiceSection></ServiceSection>
      <HowItWorkSection></HowItWorkSection>
      <PricingSection></PricingSection>
      <CtaSection></CtaSection>
    </div>
  );
};

export default Home;
