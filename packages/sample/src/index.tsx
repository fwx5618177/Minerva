import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import { ConfigProvider } from "@minerva/lib-core";

import App from "./App";

import "@i18n/index";
import "@styles/global.scss";

import "@minerva/lib-core/dist/index.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  // <ConfigProvider>
  <BrowserRouter>
    <App />,
  </BrowserRouter>,
  // </ConfigProvider>,
);
