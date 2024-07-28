import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "@config/i18n";
import "@styles/global.scss";

import "@minerva/lib-core/dist/index.css";

import { ConfigProvider } from "@minerva/lib-core";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ConfigProvider theme={"dark"}>
    <App />,
  </ConfigProvider>,
);
