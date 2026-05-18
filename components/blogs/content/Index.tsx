import Content from "./Content";
import React from "react";
import ContentTwo from "./ContentTwo";
import ContentThree from "./ContentThree";
import Testimonials from "./Testimonials";

const Index = () => {
  return (
    <div className="bg-ink text-paper">
      <Content />
      <ContentTwo />
      <ContentThree />
      <Testimonials />
    </div>
  );
};

export default Index;
