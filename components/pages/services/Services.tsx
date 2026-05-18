import React from "react";
import Navigation from "../../Navigation";
import HeroSection from "./HeroSection";
import OurServicesSection from "./OurServicesSection";
import Footer from "@/components/Footer";
import FooterSubscribe from "@/components/blogs/FooterSubscribe";

const Services = () => {
  return (
    <main className="bg-ink text-paper min-h-screen">
      <Navigation />
      <HeroSection />
      <OurServicesSection />
      <FooterSubscribe />
      <Footer />
    </main>
  );
};

export default Services;
