import React from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "./src/pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
      </ReactRoutes>
    </BrowserRouter>
  );
}
