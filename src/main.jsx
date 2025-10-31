import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap first
import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css"; // ✅ Your custom styles after Bootstrap
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
