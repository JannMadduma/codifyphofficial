import React from "react";
import Hero from "./hero";
import Portfolio from "./Portfolio";
import Technology from "./Technology";
import FAQ from "./FAQ";
import PricingService from "./PricingService";
import Pricing from "./Pricing";
import Footer from "../common/Footer";
import ResponsiveAppBar from "../common/Navbar";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import ContactUs from "./ContactUs";

const Home = ({}) => {
  const SectionStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div id="home1">
      <Fullpage>
        <ResponsiveAppBar />
        <FullPageSections>
          <FullpageSection style={{ SectionStyle }}>
            <Hero />
          </FullpageSection>

          <FullpageSection style={{ SectionStyle }}>
            <Portfolio />
          </FullpageSection>

          <FullpageSection style={{ SectionStyle }}>
            <PricingService />
          </FullpageSection>

          <FullpageSection style={{ SectionStyle }}>
            <Pricing />
          </FullpageSection>

          <FullpageSection style={{ SectionStyle }}>
            <Technology />
          </FullpageSection>

          <FullpageSection style={{ SectionStyle }}>
            <FAQ />
          </FullpageSection>

          <FullpageSection style={{ SectionStyle }}>
            <ContactUs />
            <Footer />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
};

export default Home;
