import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
reportWebVitals();

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
