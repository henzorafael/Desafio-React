import React from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import View from "./components/View";
import Formulario from "./pages/Formulario";
import Home from "./pages/Home";
import ViewFormulario from "./pages/ViewFormulario";

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>       
            <Route path="/" element={<Home />}/>

            <Route path="/formulario" element={<Formulario/>} />

            <Route path="/viewformulario" element={<ViewFormulario/>} />
      </ReactRoutes>
    </BrowserRouter>
  );
}
