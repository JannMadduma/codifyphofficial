import React from "react";
import Home from "./components/home/Home";
import Listing from "./components/listing/list/Listing";

import { Route, Routes } from "react-router-dom";
const ComponentRoute = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/listing" element={<Listing />} />
    </Routes>
  );
};

export default ComponentRoute;
