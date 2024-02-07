import React from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import FooterSubscribe from "../../blogs/FooterSubscribe";
import HeroSection from "./HeroSection";
import Plans from "./Plans";

const Pricing = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <Plans />
      <FooterSubscribe />
      <Footer />
    </div>
  );
};

export default Pricing;
