import React from "react";

import Layout from "./pages/Layout";
import Sidebar from "@components/Sidebar/Sidebar";
import Main from "@components/Main/Main";
import Header from "@components/Header/Header";

import "@styles/app.module.scss";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout theme="light">
      <Sidebar />
      <Main>
        <Header />
        <section className="section">
          <h2>{t("lib.about")}</h2>
          <p>{t("lib.about.description")}</p>
        </section>
        <section className="section">
          <h2>{t("lib.installation")}</h2>
          <p>{t("lib.installation.description")}</p>
          <div className="code-block">
            <pre>
              <code>npm install @acme/components</code>
            </pre>
          </div>
        </section>
        <section className="section">
          <h2>Components</h2>
          <p>
            Acme Components provides a wide range of beautifully designed
            components to help you build your web applications. Here are some of
            the available components:
          </p>
          <div className="components-grid">
            <div className="component-card">
              <img src="/placeholder.svg" alt="Button" />
              <h3>Button</h3>
              <p>
                A customizable button component with various styles and sizes.
              </p>
            </div>
            <div className="component-card">
              <img src="/placeholder.svg" alt="Card" />
              <h3>Card</h3>
              <p>
                A versatile card component with header, content, and footer
                sections.
              </p>
            </div>
            <div className="component-card">
              <img src="/placeholder.svg" alt="Dropdown" />
              <h3>Dropdown</h3>
              <p>
                A customizable dropdown menu component with various interaction
                options.
              </p>
            </div>
          </div>
        </section>
      </Main>
    </Layout>
  );
};

export default App;
