import React from "react";
import Navigation from "../../Navigation";
import HeroSection from "./HeroSection";
import OurServicesSection from "./OurServicesSection";
import Content from "../../blogs/content/Content";
import ContentTwo from "@/components/blogs/content/ContentTwo";
import ContentThree from "@/components/blogs/content/ContentThree";
import Footer from "@/components/Footer";
import FooterSubscribe from "@/components/blogs/FooterSubscribe";

const Services = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navigation />
      <HeroSection />
      <OurServicesSection />
      
      <FooterSubscribe />
      <Footer />
    </div>
  );
};

export default Services;
