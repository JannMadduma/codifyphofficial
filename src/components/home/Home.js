import React from "react";
import StickyFooter from "../common/Footer";
import ResponsiveAppBar from "../common/Navbar";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Stats from "./Stats";
import TopListing from "./TopListing";

const Home = ({}) => {
  return (
    <div>
      <ResponsiveAppBar />
      <Banner />
      <Gallery />
      <Stats />
      <TopListing />
      <StickyFooter/>
    </div>
  );
};

export default Home;
