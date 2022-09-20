import React from "react";
import StickyFooter from "../../common/Footer";
import ResponsiveAppBar from "../../common/Navbar";
import List from "./List";

const Listing = ({}) => {
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <List />
      <StickyFooter />
    </React.Fragment>
  );
};

export default Listing;
