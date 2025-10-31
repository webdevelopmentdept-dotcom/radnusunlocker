import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap first
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css"; // ✅ Your custom styles after Bootstrap

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
