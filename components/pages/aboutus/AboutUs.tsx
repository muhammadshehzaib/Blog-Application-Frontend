import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import FooterSubscribe from "@/components/blogs/FooterSubscribe";
import React from "react";
import HeroSection from "./HeroSection";
import Histroy from "./Histroy";

const AboutUs = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <Histroy />
      <FooterSubscribe />
      <Footer />
    </div>
  );
};

export default AboutUs;
