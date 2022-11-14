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
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Feedbacks from "./Feedbacks";
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
            <AboutUs />
          </FullpageSection>

          <FullpageSection style={{ SectionStyle }}>
            <Framework />
          </FullpageSection>

          <FullpageSection style={{ SectionStyle }}>
            <Missionvision />
          </FullpageSection>

          <FullpageSection style={{ SectionStyle }}>
            <Goals />
          </FullpageSection>

          <FullpageSection style={{ SectionStyle }}>
            <Feedbacks />
          </FullpageSection>

          <FullpageSection style={{ SectionStyle }}>
            <Team />
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
