import React from "react";
import StickyFooter from "../common/Footer";
import ResponsiveAppBar from "../common/Navbar";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Stats from "./Stats";
import TopListing from "./TopListing";
import CallToAction from "../common/CallToAction";
import { Box } from "@mui/system";
import Subscribe from "../common/subscribe";

const Home = ({}) => {
  return (
    <div>
      <ResponsiveAppBar />
      <Banner />
      <Box sx={{ padding: "50px" }}>
        <CallToAction />
      </Box>
      <Gallery />
      <Stats />
      <TopListing />
      <Box sx={{ padding: "50px 0" }}>
        <Subscribe />
      </Box>
      <Box sx={{ padding: "50px" }}>
        <CallToAction />
      </Box>

      <StickyFooter />
    </div>
  );
};

export default Home;
