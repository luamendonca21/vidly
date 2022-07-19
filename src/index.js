import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
reportWebVitals();

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
