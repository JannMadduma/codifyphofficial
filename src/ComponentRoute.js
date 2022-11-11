import React from "react";
import Home from "./components/home/Home";
import Listing from "./components/listing/list/Listing";

import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import ManageProperties from "./components/admin/ManageProperties";
import Manageusers from "./components/admin/ManageUser";
import { useSelector } from "react-redux";
import ViewProperty from "./components/listing/view/ViewProperty";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/common/ContactUs";
import ManageSubscribed from "./components/admin/ManageSubscribed";
import Developers from "./components/home/Developers";

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
      <Route path="/viewproperty/:idNo" element={<ViewProperty />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/developers" element={<Developers />} />
      <Route
        element={<ProtectedRoute isAllowed={loggedIn?.role === "admin"} />}
      >
        <Route path="/manageproperties" element={<ManageProperties />} />
        <Route path="/manageusers" element={<Manageusers />} />
        <Route path="/managesubscribed" element={<ManageSubscribed />} />
      </Route>
    </Routes>
  );
};

export default ComponentRoute;
