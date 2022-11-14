import React from "react";
import AboutUs from "./AboutUs";
import Framework from "./Framework";
import Missionvision from "./missionvision";
import Goals from "./goalsObj";
import Team from "./Team";
import Footer from "../common/Footer";
import ResponsiveAppBar from "../common/Navbar";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Feedbacks from "./Feedbacks";
import ContactUs from "./ContactUs";

const AboutUsRoute = ({}) => {
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

export default AboutUsRoute;
