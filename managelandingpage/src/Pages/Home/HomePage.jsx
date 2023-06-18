import React from "react";
import MainLayout from "../../Components/MainLayout/MainLayout";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Testimonial from "./Testimonial";
import CTA from "./CTA";

function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeatureSection />
      <Testimonial />
      <CTA />
    </MainLayout>
  );
}

export default Home;
