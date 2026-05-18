import React from "react";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import HeroSection from "./HeroSection";
import Plans from "./Plans";

const Pricing = () => {
  return (
    <main className="bg-ink text-paper min-h-screen">
      <Navigation />
      <HeroSection />
      <Plans />
      <Footer />
    </main>
  );
};

export default Pricing;
