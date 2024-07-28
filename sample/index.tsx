import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";

import "@config/i18n";
import "@styles/global.scss";
import { ThemeProvider } from "@contexts/ThemeContext";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ThemeProvider theme="">
    <App />
  </ThemeProvider>,
);
