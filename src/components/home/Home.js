import React from "react";
import StickyFooter from "../common/Footer";
import ResponsiveAppBar from "../common/Navbar";
import Banner from "./Banner";

const Home = ({}) => {
  return (
    <div>
    <ResponsiveAppBar/>
      <Banner />
      <StickyFooter/>
    </div>
  );
};

export default Home;
