
import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./common/context/Formulario";

import "./index.css";
import Routes from "./routes";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <UserProvider>  
        <Routes />
      </UserProvider>  
  </React.StrictMode>
);
