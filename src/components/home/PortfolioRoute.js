import React from "react";
import Portfolio from "./Portfolio";
import Footer from "../common/Footer";
import ResponsiveAppBar from "../common/Navbar";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import ContactUs from "./ContactUs";

const PortfolioRoute = ({}) => {
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
            <Portfolio />
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

export default PortfolioRoute;
