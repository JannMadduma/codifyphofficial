import { Box } from "@mui/system";
import React from "react";
import CallToAction from "../../common/CallToAction";
import StickyFooter from "../../common/Footer";
import ResponsiveAppBar from "../../common/Navbar";
import Subscribe from "../../common/subscribe";
import List from "./List";

const Listing = ({}) => {
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <Subscribe />
      <Box sx={{ paddingTop: "10px" }}>
        <List />
      </Box>
      <Box sx={{ padding: "50px" }}>
        <CallToAction />
      </Box>
      <StickyFooter />
    </React.Fragment>
  );
};

export default Listing;
