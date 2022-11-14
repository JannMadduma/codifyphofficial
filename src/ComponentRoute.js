import React from "react";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import AboutUsRoute from "./components/home/AboutUsRoute";
import PortfolioRoute from "./components/home/PortfolioRoute";
import PricingRoute from "./components/home/PricingRoute";

const ComponentRoute = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUsRoute />} />
      <Route path="/portfolio" element={<PortfolioRoute />} />
      <Route path="/pricing" element={<PricingRoute />} />
      {/* <Route path="/admin" element={<SignInButton />} />
      <Route path="/pendingclients" element={<PendingClients />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/pendingprojects" element={<PendingProjects />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/freelancers" element={<Freelancers />} />
      <Route path="/subscribed" element={<Subscribed />} /> */}
    </Routes>
  );
};

export default ComponentRoute;
