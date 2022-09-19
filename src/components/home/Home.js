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
<<<<<<< HEAD
      <StickyFooter/>
=======
      <StickyFooter />
>>>>>>> 0ad05f7e726302669ec7dcacba8d90ee281de653
    </div>
  );
};

export default Home;
