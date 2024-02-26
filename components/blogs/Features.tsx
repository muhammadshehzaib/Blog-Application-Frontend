import React from "react";
import Cards from "./Cards";

const Features = () => {
  return (
    <div className="mb-4">
      <div className="mb-6 mx-auto md:mb-12 text-center">
        <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
          Features
        </p>
        <h2 className="font-heading mb-4 font-bold tracking-tight text-4xl md:text-5xl">
          What you get with{" "}
          <span className="whitespace-nowrap">ScribbleSphere</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 text-center">
          Boosting Your Online Impact: Unveiling the Harmonies Unleashed in Our
          Platform&apos;s Fundamental Capabilities, from Effortless Integration
          to Collaborative Creativity.
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default Features;
