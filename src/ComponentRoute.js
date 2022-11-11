import React from "react";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";

const ComponentRoute = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
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
