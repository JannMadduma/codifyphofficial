import React from "react";
import Hero from "./hero";
import Portfolio from "./Portfolio";
import Technology from "./Technology";
import FAQ from "./FAQ";
import AboutUs from "./AboutUs";
import Framework from "./Framework";
import Missionvision from "./missionvision";
import Goals from "./goalsObj";
import Team from "./Team";
import PricingService from "./PricingService";
import Pricing from "./Pricing";
import Footer from "../common/Footer";
import ResponsiveAppBar from "../common/Navbar";

const Home = ({}) => {
  return (
    <div id="home1">
      <ResponsiveAppBar />
      <Hero />
      <Portfolio />
      <PricingService />
      <Pricing />
      <Technology />
      <FAQ />
      <AboutUs />
      <Framework />
      <Missionvision />
      <Goals />
      {/* <Feedbacks /> */}
      <Team />
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
};

export default Home;
