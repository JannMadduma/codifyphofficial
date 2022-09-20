import React from "react";
import Home from "./components/home/Home";
import Listing from "./components/listing/list/Listing";

import { Route, Routes } from "react-router-dom";
import ManageProperties from "./components/admin/ManageProperties";
import Manageusers from "./components/admin/ManageUser";
const ComponentRoute = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/manageproperties" element={<ManageProperties />} />
      <Route path="/manageusers" element={<Manageusers />} />
    </Routes>
  );
};

export default ComponentRoute;
