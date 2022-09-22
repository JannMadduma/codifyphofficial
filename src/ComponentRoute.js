import React from "react";
import Home from "./components/home/Home";
import Listing from "./components/listing/list/Listing";

import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import ManageProperties from "./components/admin/ManageProperties";
import Manageusers from "./components/admin/ManageUser";
import { useSelector } from "react-redux";
import ViewProperty from "./components/listing/view/ViewProperty";
import AboutUs from "./components/home/AboutUs";

// https://www.robinwieruch.de/react-router-private-routes/
const ProtectedRoute = ({ isAllowed, redirectPath = "/", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

const ComponentRoute = () => {
  const loggedIn = useSelector((state) => state.loggedIn);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/viewproperty/:id" element={<ViewProperty />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route
        element={<ProtectedRoute isAllowed={loggedIn?.role === "admin"} />}
      >
        <Route path="/manageproperties" element={<ManageProperties />} />
        <Route path="/manageusers" element={<Manageusers />} />
      </Route>
    </Routes>
  );
};

export default ComponentRoute;
