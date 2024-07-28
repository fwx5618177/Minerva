import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";

import "@config/i18n";
import "@styles/global.scss";
import { ConfigProvider } from "@contexts/ConfigProvider";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
);
